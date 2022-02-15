import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit }  ) {
        // TODO: colocar geolocation
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
            error => {
                console.error(error)
                throw new Error('No geolocation :(')
            }
        )
    }
}



export default actions;