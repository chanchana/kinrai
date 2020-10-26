import React, { useState, useEffect } from 'react';
import { Container, Button, TextField, FormControl, LinearProgress } from '@material-ui/core'
import Register from './Register'
import Recommender from './Recommender'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Cookies from 'js-cookie'
import axios from 'axios'
import env from './environment'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffa040',
      main: '#ff6f00',
      dark: '#c43e00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#fff',
    },
  },
})

export const App = () => {

  const [isDone, setIsDone] = useState(false)
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [isRegister, setIsRegister] = useState(false)

  useEffect(() => {
    const cookieUsername = Cookies.get('username')
    if (cookieUsername) {
      login(cookieUsername)
    } else {
      setIsDone(true)
    }
  }, [])

  const login = (inputUsername) => {
    axios.post(`${env.appServerUrl}/api/auth`, {
      username: inputUsername
    }).then(res => {
      const data = res.data
      if (!data.status) {
        alert(data.error)
        setIsDone(true)
      } else {
        Cookies.set('username', data.data.username)
        setUser(data.data)
        setIsDone(true)
      }
    }).catch((err) => {
      alert(err)
    })
  }

  const handleLogin = () => {
    setIsDone(false)
    console.log(env)
    login(username)
  }

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const loginForm = (
    <div>
      <h3>Please login</h3>
      <FormControl fullWidth>
        <TextField onChange={handleUsername} variant="outlined" label="Username" />
      </FormControl>
      <Button onClick={handleLogin} style={{marginTop: '10px'}} variant="contained" color="primary">Login</Button>

      <h4>or</h4>
      <Button onClick={() => setIsRegister(true)} variant="contained" color="primary">Register</Button>
    </div>
  )

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <h1>Resteraunt Recommender</h1>
          { isDone ?
            <div>
              { (!isRegister && !user) && loginForm }
              { isRegister && (
                <div>
                  <Button onClick={() => setIsRegister(false)} color="primary">Login</Button>
                  <Register />
                </div>
              )}
              { user && <Recommender user={user} name={user.username} /> }
            </div> :
            <LinearProgress  />
          }
        </Container>
      </ThemeProvider>
    </div>
  )
}
//npx browserslist --update-db

export default App;
