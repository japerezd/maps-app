import { createStore } from 'vuex';
import mapModule from './map';

// My custom modules
import placesModule from './places';
import { PlacesState } from './places/state';
import { MapState } from './map/state';

export interface StateInterface {
  places: PlacesState;
  map: MapState;
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule
  },
});
