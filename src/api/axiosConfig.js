import axios from 'axios';
// let baseURL_Value = 'https://9c96-103-106-109-239-104.ap.ngrok.io'
let baseURL_Value = 'http://localhost:8080/api/v1';
export default axios.create({
  baseURL: baseURL_Value,
  headers: {"ngrok-skip-browser-warning": "true"}
})
