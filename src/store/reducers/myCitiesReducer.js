const initialState = {
    savedCities: [],
    citiesData: {}
}

const myCitiesReducer = (state = initialState, action) => {
    switch(action.type) {   
        case 'GET_SAVED_CITIES': {
            let updatedState = {...state};
            updatedState.savedCities = action.payload.savedCities;
            updatedState.citiesData = action.payload.citiesData;
            return updatedState;
        }
        default: return state;
    }
}

export default myCitiesReducer;