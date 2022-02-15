export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number]; //long, lat
}

function state(): PlacesState {
  return {
    isLoading: true,
    userLocation: undefined,
  }
}

export default state;