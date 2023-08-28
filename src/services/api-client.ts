import axios from "axios"

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3b11d4fd50cc4f1bace5c4aedcb4ff76'
  }
})
