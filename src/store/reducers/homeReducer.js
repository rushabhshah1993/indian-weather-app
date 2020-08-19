const initialState = {
    allCities: [],
    selectedCity: null,
    selectedCityData: {},
}

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INIT_CITIES': {
            let updatedState = {...state};
            updatedState.allCities = action.payload.cities;
            return updatedState;
        }
        case 'ON_SELECT_CITY': {
            let updatedState = {...state};
            updatedState.selectedCity = action.payload.selectedCity;
            updatedState.selectedCityData = action.payload.selectedCityData;
            return updatedState;
        }
        default: return state;
    }
}

export default homeReducer;