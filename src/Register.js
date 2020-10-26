import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, FormControl, Select, MenuItem, InputLabel, FormControlLabel, FormGroup, Checkbox, LinearProgress, CircularProgress } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import env from './environment'
import axios from 'axios'
import Cookies from 'js-cookie'

export const Register = () => {

  const [isDone, setIsDone] = useState(false)
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [usernameError, setUsernameError] = useState('')
  const [username, setUsername] = useState('')
  const [gender, setGender] = useState('')
  const [birthDate, setBirthDate] = useState(null)
  const [preferPrice, setPreferPrice] = useState('')
  const [preferNearby, setPreferNearby] = useState(false)
  const [categories, setCategories] = useState([])
  const [categoriesList, setCategoriesList] = useState([])

  useEffect(() => {
    axios.get(`${env.appServerUrl}/api/categories/search?is_visible=1`).then((res) => {
      const visibleCategories = []
      res.data.slice(0, 10).forEach((e) => {
        console.log(e)
        visibleCategories.push({
          value: e._id,
          label: e.name_en,
        })
      })
      setCategoriesList(visibleCategories)
      setIsDone(true)
    }).catch((err) => {
      alert(err.response)
    })
  }, [])

  const handleRegister = () => {
    if (usernameError !== '') {
      alert(usernameError)
    } else {
      const errors = []
      if (username === '') {
        errors.push('Username')
      }
      if (gender === '') {
        errors.push('Gender')
      }
      if (!birthDate) {
        errors.push('Birthdate')
      }
      if (preferPrice === '') {
        errors.push('Prefer Price')
      }
      if (errors.length > 0) {
        alert(`Please fill in theres fields: ${errors.join(', ')}`)
      } else {
        setIsDone(false)
        const newUser = {
          username: username,
          profile: {
            gender: gender,
            birthdate: birthDate,
            preference: {
              categories: categories,
              price_range: preferPrice,
              prefer_nearby: preferNearby,
            }
          }
        } 
        axios.post(`${env.appServerUrl}/api/users`, newUser).then((res) => {
          if ('username' in res.data) {
            Cookies.set('username', res.data.username)
            window.location.reload()
          } else {
            alert('Error creating new user')
            setIsDone(true)
          }
        }).catch((err) => {
          alert(err.response)
          setIsDone(true)
        })
      }
    }
  }

  const handleUsername = (event) => {
    const letterNumber = /^[0-9a-zA-Z]+$/
    const newUsername = event.target.value
    let errorText = ''
    if (!newUsername.match(letterNumber)) {
      errorText = 'Cannot contain special charecters.'
    }
    if (newUsername === '') {
      errorText = 'Username cannot be blank.'
    }
    if (errorText === '') {
      setIsCheckingUsername(true)
      axios.get(`${env.appServerUrl}/api/users/has/${newUsername}`).then((res) => {
        setIsCheckingUsername(false)
        if (res.data) {
          errorText = 'This name is already existed'
        } else {
          errorText = ''
        }
        setUsernameError(errorText)
      })
    }
    setUsernameError(errorText)
    setUsername(newUsername)
  }

  const handleGender = (event) => {
    setGender(event.target.value);
  }

  const handlePreferPrice = (event) => {
    setPreferPrice(event.target.value);
  }

  const handleBirthDate = (date) => {
    setBirthDate(date);
  }

  const handlePreferNearby = (event) => {
    setPreferNearby(event.target.checked)
  }

  function handleCategories(checkedName) {
    const newNames = categories?.includes(checkedName)
      ? categories?.filter(name => name !== checkedName)
      : [...(categories ?? []), checkedName];
    setCategories(newNames);
    console.log(newNames)
    return newNames;
  }

  const allCategories = (
    categoriesList.map(({ value, label }) => (
      <FormControlLabel control={<Checkbox checked={categories.includes(value)} onChange={() => handleCategories(value)} name={value} />} key={value} label={label} />
    ))
  )

  return (
    <div>
      <h3>Registration</h3>
      { isDone ?
        <div>
          <FormControl fullWidth>
            {/* Username */}
            <Box display="flex" alignItems="center">
              <Box width="100%" mr={1}>
              <TextField fullWidth error={usernameError !== ''} helperText={usernameError} value={username} onChange={handleUsername} variant="outlined" label="Username" />
              </Box>
              { isCheckingUsername && 
                <Box minWidth={35}>
                  <CircularProgress color="secondary" />
                </Box>
              }
            </Box>
            <p></p>
            {/* Gender */}
            <FormControl variant="outlined">
              <InputLabel>Gender</InputLabel>
              <Select variant="outlined" value={gender} onChange={handleGender} label="Gender">
                <MenuItem value="none"><em>Select gender...</em></MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
            {/* Birth Date */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker margin="normal" inputVariant="outlined" id="date-picker-dialog" label="Birth Date" format="dd/MM/yyyy" value={birthDate} onChange={handleBirthDate} KeyboardButtonProps={{ 'aria-label': 'change date' }} />
            </MuiPickersUtilsProvider>

            <h4>Profile</h4>
            {/* Prefer price */}
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-filled-label">Price Preference</InputLabel>
              <Select labelId="demo-simple-select-filled-label" variant="outlined" value={preferPrice} onChange={handlePreferPrice} label="Price Preference">
                <MenuItem value="none"><em>Select prefer price...</em></MenuItem>
                <MenuItem value={1}>฿</MenuItem>
                <MenuItem value={2}>฿฿</MenuItem>
                <MenuItem value={3}>฿฿฿</MenuItem>
                <MenuItem value={4}>฿฿฿฿</MenuItem>
                <MenuItem value={-1}>No Preference</MenuItem>
              </Select>
            </FormControl>
            <p></p>
            {/* Prefer nearby */}
            <FormControlLabel control={<Checkbox checked={preferNearby} onChange={handlePreferNearby} />} label="Prefer nearby"/>

            <p></p>
            <h4>Favorite Categories</h4>
            <FormControl component="fieldset">
              <FormGroup>
                {allCategories}
              </FormGroup>
            </FormControl>
          </FormControl>
          <p></p>
          <Button onClick={handleRegister} variant="contained" color="primary">Register</Button>
          <p></p>
        </div> :
        <LinearProgress  />
      }
    </div>
  )
}

export default Register