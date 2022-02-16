import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1IjoibnVuZHUiLCJhIjoiY2t6b201bWQ3MzNobzJvbjJkeHZpanB3ZiJ9.w-XD5AE5sYIIzda8Z9L9DA',
  },
});

export default searchApi;
