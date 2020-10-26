import React, { useState, useEffect } from 'react'
import { LinearProgress, Box, Typography, Card, CardContent, CardActions, Button, CardMedia, Grid, Chip } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CloseIcon from '@material-ui/icons/Close'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import StarIcon from '@material-ui/icons/Star'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import Cookies from 'js-cookie'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import LocationOffIcon from '@material-ui/icons/LocationOff'
import axios from 'axios'
import env from './environment'

const ProgressWithLabel = (props) => (
  <Box display="flex" alignItems="center">
    <Box width="100%" mr={1}>
      <LinearProgress variant="determinate" {...props} />
    </Box>
    <Box minWidth={35}>
      <Typography variant="body2" color="textSecondary">{props.label}</Typography>
    </Box>
  </Box>
)

const Recommender = (props) => {

  const [loadingText, setLoadingText] = useState('Getting start.')
  const [restaurants, setRestaurants] = useState(null)
  const [location, setLocation] = useState(null)
  const [token, setToken] = useState(null)
  const [interaction, setInteraction] = useState([])
  const [currentRestaurant, setCurrentRestaurant] = useState(0)

  useEffect(() => {
    setLoadingText('Getting current location')
    if (!("geolocation" in navigator)) {
      alert('Geolocation is disabled')
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.longitude, position.coords.latitude])
        console.log(position.coords)
        setLoadingText('Getting recommendations')
        axios.post(`${env.appServerUrl}/api/recommendations`, {
          users: [props.user._id],
          location: {
            type: 'Point',
            coordinates: [position.coords.longitude, position.coords.latitude],
            // coordinates: [100.496216, 13.649434], // TEST KMUTT
          }
        }).then((res) => {
          console.log(res.data)
          setRestaurants(res.data.recommendations)
          setToken(res.data.token)
          setLoadingText('')
        })
      })
    }
  }, [props.user._id])

  const finishRecommendation = () => {
    console.log('finish!')
    console.log(interaction)
    // histories
    axios.post(`${env.appServerUrl}/api/recommendations`, {
      token: token,
      histories: interaction,
    }).then((res) => {
      setRestaurants(res.data.recommendations)
    })
  }

  const handleInteraction = (restaurantId, isLove) => {
    const newInteraction = {
      restaurant: restaurantId,
      is_love: isLove,
      timestamp: Date.now(),
    }
    interaction.push(newInteraction)
    setInteraction(interaction)
    const newCurrentRestaurant = currentRestaurant + 1
    setCurrentRestaurant(newCurrentRestaurant)
    if (newCurrentRestaurant >= restaurants.length) {
      finishRecommendation()
    }
  }

  const handleMore = () => {
    setCurrentRestaurant(0)
  }

  const handleLogout = () => {
    Cookies.remove('username')
    window.location.reload()
  }

  const progressDone = (
    <Grid container direction="column" alignItems="center">
      <CheckCircleIcon style={{ fontSize: 100 }} color="secondary" />
      <h3>Thank you.</h3>
      <Button onClick={handleMore} variant="contained" color="primary">More</Button>
    </Grid>
  )

  const recommender = (
    <div>
      { restaurants && currentRestaurant < restaurants.length && (
          <div>
            <ProgressWithLabel variant="determinate" value={((currentRestaurant + 1)/restaurants.length) * 100} label={`${currentRestaurant + 1}/${restaurants.length}`} />
            <p></p>
            <Card>
              { restaurants[currentRestaurant].cover_url && <CardMedia component="img" image={restaurants[currentRestaurant].cover_url} title="Contemplative Reptile" height="160" /> }
              <CardContent>
                <h2 style={{marginBottom: '0px', marginTop: '5px'}}>{restaurants[currentRestaurant].name ?? ''}</h2>
                <p style={{fontSize: '10px', color: 'gray', marginBottom: '30px'}}>{restaurants[currentRestaurant].address}</p>
                <div>
                  {restaurants[currentRestaurant].profile.categories.map(({ _id, name_en }) => <Chip key={_id} style={{marginBottom: '5px', marginRight: '10px'}} label={name_en} />)}
                </div>
                <div>
                  <p>
                    <strong>
                      {`${(restaurants[currentRestaurant].dist.calculated/1000).toFixed(2)} km` ?? ''}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </strong>
                    { restaurants[currentRestaurant].profile.price_range !== -1 && (
                      <span>
                        {'฿'.repeat(restaurants[currentRestaurant].profile.price_range)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    )}
                    { restaurants[currentRestaurant].profile.rating && (
                      <span>
                        <StarIcon style={{fontSize: 14}}/> {restaurants[currentRestaurant].profile.rating}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    )}
                    { restaurants[currentRestaurant].profile.likes && (
                      <span>
                        <ThumbUpAltIcon style={{fontSize: 14}} /> {restaurants[currentRestaurant].profile.likes}
                      </span>
                    )}
                  </p>
                </div>
              </CardContent>
              <CardActions>
                <Grid container>
                  <Grid item xs={6}>
                    <Button fullWidth onClick={() => handleInteraction(restaurants[currentRestaurant]._id, false)} size="large" color="secondary" startIcon={<CloseIcon/>}><strong>Nah</strong></Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button fullWidth onClick={() => handleInteraction(restaurants[currentRestaurant]._id, true)} size="large" color="primary" startIcon={<FavoriteIcon/>}><strong>Love</strong></Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </div>
        )
      }
      { restaurants && currentRestaurant >= restaurants.length &&
        <div>
          { progressDone }
        </div>
      }
    </div>
  )

  return (
    <div>
      {/* {restaurants} */}
      <Grid container direction="row" justify="space-between">
        <h3>Hi, {props.user.username ?? ''}</h3>
        <Button onClick={handleLogout} size="small" color="secondary">Logout</Button>
      </Grid>
      { location ?
        <div style={{color: 'gray'}}>
          <LocationOnIcon style={{fontSize: '14px'}}/> {location[1]}, {location[0]}
        </div> :
        <LocationOffIcon style={{fontSize: '14px'}}/>
      }

      <p></p>
      { loadingText ?
        <div>
          <p>{loadingText}</p>
          <LinearProgress />
        </div> :
        <div>
          { recommender }
        </div>
      }
      <p></p>
    </div>
  )
}

export default Recommender