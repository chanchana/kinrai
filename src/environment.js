import dotenv from 'dotenv'

dotenv.config()

export default {
    appServerUrl: process.env.APP_SERVER_URL ?? 'https://restaurant-recommender-system.et.r.appspot.com',
}