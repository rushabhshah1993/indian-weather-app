import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import styles from './MyCities.css';

import cityStyles from './../../components/City/City.css';

class MyCities extends Component {
    state = {
        citiesData: {},
        tempTypes: ['°C', 'K', '°F'],
        selectedTempType: 'K',
        updatedFromStore: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props);
        if(!props.isAuthenticated) {
            props.history.push('/login');
        }
        return state;
    }

    getTemp = (temp) => {
        let temperature = temp;
        let tempType = this.state.selectedTempType;
        if(tempType === '°C') { temperature = temp - 273.15; } 
        else if(tempType === 'K') { temperature = temp; }
        else if(tempType === '°F') { temperature = ((temp-273.15)*1.8)+32; }
        return temperature.toFixed(1);
    }

    tempTypeChangeHandler = (event) => {
        this.setState({
            selectedTempType: event.target.innerHTML
        })
    }

    render() {
        let classNames = [styles.WeatherCard];
        if(new Date().getHours() > 19 || new Date().getHours() < 7) { classNames.push(cityStyles.Dark); }
        else { classNames.push(cityStyles.Sunny); }
        let cityCards = "You haven't selected any cities";
        if(Object.keys(this.props.citiesData).length > 0) {
            cityCards = Object.keys(this.props.citiesData).map(city => {
                let temp = this.getTemp(this.props.citiesData[city]);
                return (
                    <div className={styles.WeatherCardContainer} key={city}>
                        <div className={classNames.join(' ')}>
                            <p>{city}</p>
                            <p>{temp} {this.state.selectedTempType}</p>
                        </div>
                        <button id={city} className={styles.RemoveButton} onClick={() => this.props.removeCity(city)}>Remove</button>
                    </div>
                )
            })
        }
        let buttonClasses = [cityStyles.Button];
        let tempButtons = this.state.tempTypes.map(type => {
            if(type === this.state.selectedTempType) {
                buttonClasses.push(cityStyles.Active);
            } else {
                buttonClasses = [cityStyles.Button];
            }
            return <button key={type} className={buttonClasses.join(' ')} onClick={this.tempTypeChangeHandler}>{type}</button>;
        })
        return (
            <div className={styles.MyCities}>
                <div className={styles.TitleContainer}>
                    <p className={styles.Title}>My Cities</p>
                    <span>Selected Temperature Type: </span>{tempButtons}
                </div>
                {cityCards}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        savedCities: state.myCities.savedCities,
        citiesData: state.myCities.citiesData,
        isAuthenticated: state.login.isAuthenticated
    }
}

export default withRouter(connect(mapStateToProps)(MyCities));
