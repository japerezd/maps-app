import Mapboxgl from 'mapbox-gl';
import { defineComponent, onMounted, ref, watch } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';

export default defineComponent({
  name: 'MapView',
  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { userLocation, isUserLocationReady } = usePlacesStore();

    const initMap = async () => {
      if (!mapElement.value) throw new Error('Elemento div no existe');
      if (!userLocation.value) throw new Error('user location no existe');

      await Promise.resolve() // This fix error in mounted component when map is smaller

      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        center: userLocation.value,
        zoom: 15,
      });

      const myLocationPopup = new Mapboxgl.Popup()
        .setLngLat(userLocation.value)
        .setHTML(`
          <h4>Aqui estoy</h4>
          <p>Actualmente en Veracruz</p>
          <p>${userLocation.value}</p>
        `)

      const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopup)
        .addTo(map)

        // TODO: establecer el mapa en vuex
    };

    // onMounted(() => {
    //   if (isUserLocationReady.value) return initMap();

    //   console.log('No tengo localizacion aun');
    // });

    watch(isUserLocationReady, () => {
      if (isUserLocationReady.value) initMap();
    });

    return {
      isUserLocationReady,
      mapElement,
    };
  },
});
