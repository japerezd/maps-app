<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables/usePlacesStore';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},

  setup() {
    usePlacesStore();
  },
});
</script>
