export const initCities = (payload) => {
    return {
        type: 'INIT_CITIES',
        payload: payload 
    }
}

export const onCitySelection = (payload) => {
    return {
        type: 'ON_SELECT_CITY',
        payload: payload
    }
}