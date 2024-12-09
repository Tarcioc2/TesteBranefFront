import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:44392/api', // Ajuste conforme a URL da sua API
})

export default api