import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoibnVuZHUiLCJhIjoiY2t6b201bWQ3MzNobzJvbjJkeHZpanB3ZiJ9.w-XD5AE5sYIIzda8Z9L9DA',
  },
});

export default directionsApi;
