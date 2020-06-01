import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://hamburger-febfe.firebaseio.com'
})

export default instance