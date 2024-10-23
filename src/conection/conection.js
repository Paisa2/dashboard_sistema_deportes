import axios from 'axios'

const API = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL: "http://localhost:8090/api/",

})

export default API