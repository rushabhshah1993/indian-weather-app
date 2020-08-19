import React, { Component } from 'react';
import styles from './CityDetail.css';
import cityStyles from './../../components/City/City.css';

import Axios from 'axios';

class CityDetail extends Component {
    state = {
        data: {},
        tempTypes: ['°C', 'K', '°F'],
        selectedTempType: '°C'
    }

    componentDidMount = () => {
        Axios.get('http://api.openweathermap.org/data/2.5/weather?q='+this.props.history.location.state.selectedCity+'&APPID=60dfad51347e098c9a6b000ced44c353')
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
            .catch(error => {console.log(error)});
    }

    getDateAndTime = () => {
        let obj = {};
        let now = new Date();
        let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let date = week[now.getDay()] + ',' + months[now.getMonth()] + ' ' + now.getDate() + ' ' + now.getFullYear();
        let time = now.getHours() + ":" + (now.getMinutes() < 10 ? '0'+now.getMinutes() : now.getMinutes())
        obj.date = date;
        obj.time = time;
        return obj;
    }

    getTemperatures = (data) => {
        let obj = {};
        let temp = data.main.temp;
        let temp_min = data.main.temp_min;
        let temp_max = data.main.temp_max;
        let tempType = this.state.selectedTempType;
        if(tempType === '°C') { 
            temp = data.main.temp - 273.15;
            temp_min = data.main.temp_min - 273.15;
            temp_max = data.main.temp_max - 273.15;
        } else if(tempType === 'K') { 
            temp = data.main.temp;
            temp_min = data.main.temp_min;
            temp_max = data.main.temp_max;
        }
        else if(tempType === '°F') {
            temp = ((data.main.temp-273.15)*1.8)+32;
            temp_min = ((data.main.temp_min-273.15)*1.8)+32;
            temp_max = ((data.main.temp_max-273.15)*1.8)+32;
        }
        obj.temp = temp.toFixed(1);
        obj.temp_min = temp_min.toFixed(1);
        obj.temp_max = temp_max.toFixed(1);
        return obj;
    }

    selectTempTypeHandler = (event) => {
        this.setState({
            selectedTempType: event.target.innerHTML
        })
    }
    
    render() {
        let classNames = [styles.CityDetail];
        let sunrise = null;
        let sunset = null;
        if(new Date().getHours() > 19 || new Date().getHours() < 7) { classNames.push(cityStyles.Dark); }
        else { classNames.push(cityStyles.Sunny); }
        let today = this.getDateAndTime();
        let temperatures = Object.keys(this.state.data).length > 0 && this.getTemperatures(this.state.data);
        let tempCategories = this.state.tempTypes.map(type => {
            let buttonClasses = [cityStyles.Button];
            if(this.state.selectedTempType === type) {
                buttonClasses.push(cityStyles.Active);
            } else {
                buttonClasses = [cityStyles.Button]
            }
            return <button key={type} className={buttonClasses.join(' ')} onClick={this.selectTempTypeHandler}>{type}</button>
        })
        if(Object.keys(this.state.data).length > 0) {
            let sunriseData = new Date(this.state.data.sys.sunrise * 1000);
            sunrise = sunriseData.getHours() + ":" + (sunriseData.getMinutes() < 10 ? '0'+sunriseData.getMinutes() : sunriseData.getMinutes());
            let sunsetData = new Date(this.state.data.sys.sunset * 1000);
            sunset = sunsetData.getHours() + ":" + (sunsetData.getMinutes() < 10 ? '0'+sunsetData.getMinutes() : sunsetData.getMinutes());
        }
        return (
            <div className={styles.CityDetailContainer}>
                <div className={classNames.join(' ')}>
                    <div className={cityStyles.CityHeader}>
                        <p className={cityStyles.CityName}>{this.props.match.params.city}</p>
                        <span className={styles.Date}>{today.date}</span> 
                        <span className={styles.Time}>{today.time}</span>
                    </div>
                    {
                        Object.keys(this.state.data).length > 0 &&
                        <>
                            <div className={cityStyles.TempContainer}>
                                <p className={cityStyles.Temperature}>{parseInt(temperatures.temp)} {this.state.selectedTempType}</p>
                                <div className={cityStyles.WeatherDescription}>
                                    <span className={cityStyles.Description}>{this.state.data.weather[0].main}</span>
                                    <span>{parseInt(temperatures.temp_max)} {this.state.selectedTempType}/{parseInt(temperatures.temp_min)} {this.state.selectedTempType}</span>
                                </div>
                            </div>
                            <div className={cityStyles.TempCategories}>
                                Tempature Type:
                                {tempCategories}
                            </div>
                            <hr />
                            <div className={styles.MoreDesc}>
                                <div className={styles.DescDetails}>
                                    <label className={styles.Labels}>Visibility</label>
                                    <p className={styles.Values}>{this.state.data.visibility/1000} KM</p>
                                </div>
                                <div className={styles.DescDetails}>
                                    <label className={styles.Labels}>Wind Speed</label>
                                    <p className={styles.Values}>{this.state.data.wind.speed} km/h</p>
                                </div>
                                <div className={styles.DescDetails}>
                                    <label className={styles.Labels}>Pressure</label>
                                    <p className={styles.Values}>{this.state.data.main.pressure} hPa</p>
                                </div>
                                <div className={styles.DescDetails}>
                                    <label className={styles.Labels}>Humidity</label>
                                    <p className={styles.Values}>{this.state.data.main.humidity} %</p>
                                </div>
                                <div className={styles.DescDetails}>
                                    <label className={styles.Labels}>Sunrise</label>
                                    <p className={styles.Values}>{sunrise}</p>
                                </div>
                                <div className={styles.DescDetails}>
                                    <label className={styles.Labels}>Sunset</label>
                                    <p className={styles.Values}>{sunset}</p>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default CityDetail;
