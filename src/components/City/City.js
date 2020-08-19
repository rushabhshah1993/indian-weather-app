import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './City.css';

const City = (props) => {
    const [tempType, setTempType] = useState('°C');
    const [tempTypes] = useState(['°C', 'K', '°F']);

    let classNames = [styles.Button];
    let tempCategories = tempTypes.map(type => {
        if(tempType === type) {
            classNames.push(styles.Active);
        } else {
            classNames = [styles.Button]
        }
        return <button key={type} className={classNames.join(' ')} onClick={() => setTempType(type)}>{type}</button>
    })
    let temperature = null;
    let min_temp = null;
    let max_temp = null;
    if(tempType === '°C') { 
        temperature = props.data.main.temp - 273.15;
        min_temp = props.data.main.temp_min - 273.15;
        max_temp = props.data.main.temp_max - 273.15;
    } else if(tempType === 'K') { 
        temperature = props.data.main.temp;
        min_temp = props.data.main.temp_min;
        max_temp = props.data.main.temp_max;
    }
    else if(tempType === '°F') {
        temperature = ((props.data.main.temp-273.15)*1.8)+32;
        min_temp = ((props.data.main.temp_min-273.15)*1.8)+32;
        max_temp = ((props.data.main.temp_max-273.15)*1.8)+32;
    }
    let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let date = week[new Date().getDay()] + ', ' + new Date().getHours() + ":" + (new Date().getMinutes() < 10 ? '0'+new Date().getMinutes() : new Date().getMinutes());
    let cityStyles = [styles.City];
    if(new Date().getHours() > 19 || new Date().getHours() < 7) { cityStyles.push(styles.Dark); }
    else { cityStyles.push(styles.Sunny); }
    return (
        <>
            <div className={styles.CityContainer}>
                <div className={cityStyles.join(' ')}>
                    <div className={styles.CityHeader}>
                            <p className={styles.CityName}>{props.data.name}</p>
                            <span>{date}</span>
                        </div>
                    <div className={styles.TempContainer}>
                        <p className={styles.Temperature}>{parseInt(temperature)} {tempType}</p>
                        <div className={styles.WeatherDescription}>
                            <span className={styles.Description}>{props.data.weather[0].main}</span>
                            <span>{parseInt(max_temp)} {tempType}/{parseInt(min_temp)} {tempType}</span>
                        </div>
                    </div>
                    <div className={styles.TempCategories}>
                        Tempature Type:
                        {tempCategories}
                    </div>
                </div>
            </div>
            <p 
                className={styles.MoreDetails} 
                onClick={() => props.history.push({
                    pathname: '/city/'+props.data.name,
                    state: {selectedCity: props.selectedCity}
                })}>
                View More Details
            </p>
            <button className={styles.AddButton} onClick={() => props.addCity(props.selectedCity)}>Add {props.data.name} to My Cities</button>
        </>
    )
}

export default withRouter(connect()(City));
