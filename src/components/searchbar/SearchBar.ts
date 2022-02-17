import { computed, defineComponent, ref } from 'vue';
import SearchResults from '@/components/search-results/SearchResults.vue'
import { usePlacesStore } from '../../composables/usePlacesStore';

export default defineComponent({

  name: 'SearchBar',
  components: { SearchResults },

  setup() {
    const { searchPlacesByTerm } = usePlacesStore();
    const debounceTimeout = ref()
    const debouncedValue = ref('') // realmente no se ocupa

    return {
      debouncedValue, // no se ocupa

      searchTerm: computed({
        get() {
          return debouncedValue.value;
        },

        set(val: string) {
          if (debounceTimeout.value) clearTimeout(debounceTimeout.value)

          debounceTimeout.value = setTimeout(() => {
            debouncedValue.value = val;
            searchPlacesByTerm(val)
          }, 500)
        }
      })
    }

  }

})