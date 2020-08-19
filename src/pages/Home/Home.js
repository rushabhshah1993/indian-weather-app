import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Home.css';
import City from './../../components/City/City';
import { onCitySelection } from './../../store/actions/homeActions';
import Axios from 'axios';

class Home extends Component {
    onCitySelectionHandler = (event) => {
        let city = event.target.value;
        Axios.get('http://api.openweathermap.org/data/2.5/weather?q='+event.target.value+'&APPID=60dfad51347e098c9a6b000ced44c353')
            .then(response => {
                let obj = {
                    selectedCity: city,
                    selectedCityData: response.data
                };
                this.props.onCitySelection(obj);
            })
            .catch(error => console.log(error));
    }

    render() {
        let options = this.props.allCities.map(city => {
            let city_value = city.city + ',' + city.country;
            return <option value={city_value} key={city.id}>{city_value}</option>;
        })
        return (
            <div className={styles.Home}>
                <div className={styles.SelectContainer}>
                    <label htmlFor='cities'>Choose your city:</label>    
                    <select id='cities' ref={this.cityOptions} onChange={this.onCitySelectionHandler} className={styles.CitySelector} value={this.props.selectedCity || ''} >
                        <option>Nothing is selected</option>
                        {options}
                    </select>
                </div>
                {
                    this.props.selectedCity !== null ?
                    <City data={this.props.selectedCityData} selectedCity={this.props.selectedCity} addCity={(city) =>  this.props.addCity(city)} /> :
                    null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allCities: state.home.allCities,
        selectedCity: state.home.selectedCity,
        selectedCityData: state.home.selectedCityData
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onCitySelection: (city) => dispatch(onCitySelection(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
