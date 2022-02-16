import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { PlacesResponse } from '@/interfaces/places';
import { Feature } from '@/interfaces/places';

const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    // TODO: colocar geolocation
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
      (error) => {
        console.error(error);
        throw new Error('No geolocation :(');
      }
    );
  },

  async searchPlacesByTerm({ commit, state }, query: string): Promise<Feature[]> {
    if (!query.length) {
        commit('setPlaces', [])
        return []
    }

    if (!state.userLocation) {
        throw new Error('No hay ubicacion del usuario')
    }

    commit('setIsLoadingPlaces')

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation?.join(','),
      },
    });

    commit('setPlaces', resp.data.features)

    return resp.data.features;
  },
};

export default actions;
