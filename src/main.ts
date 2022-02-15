import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoibnVuZHUiLCJhIjoiY2t6b201bWQ3MzNobzJvbjJkeHZpanB3ZiJ9.w-XD5AE5sYIIzda8Z9L9DA';

if (!navigator.geolocation) {
  alert('Tu navegador no soporta el Geolocation')
  throw new Error('Tu navegador no soporta el Geolocation')
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
