<template>
  <map-view></map-view>
  <search-bar></search-bar>
  <my-location-btn></my-location-btn>
  <trip-details></trip-details>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables/usePlacesStore';
import MapView from '@/components/mapview/MapView.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';
import TripDetails from '@/components/trip-details/TripDetails.vue';

export default defineComponent({
  name: 'Home',
  components: { MapView, MyLocationBtn, SearchBar, TripDetails },

  setup() {
    usePlacesStore();
  },
});
</script>
