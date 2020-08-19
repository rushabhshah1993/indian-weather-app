import Axios from 'axios';

export const getSavedCities = payload => {
    return {
        type: 'GET_SAVED_CITIES',
        payload: payload
    }
}

export const initSavedCities = (payload) => {
    return dispatch => {
        let values = {},
            promises = [];

        let savedCities = [...payload.savedCities];

        for(let city of savedCities) {
            let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=60dfad51347e098c9a6b000ced44c353';
            promises.push(Axios.get(url));
        }

        Axios.all(promises).then(results => {
            results.forEach(result => {
                values[result.data.name] = result.data.main.temp;
            })
            dispatch(getSavedCities({
                savedCities: payload.savedCities,
                citiesData: values
            }))
        })
    }
}