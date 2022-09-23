import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.1.106:8000/api/'

Vue.use({
  install(Vue){
    Vue.prototype.$http = axios
  }
})

Vue.prototype.$http.interceptors.response.use(r => { 
  return r
}, () => {
  
  window._Vue.$router.push({name: "login"}).catch(() => {})
})