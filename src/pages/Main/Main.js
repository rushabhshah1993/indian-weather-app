import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Main.css';
import Home from './../Home/Home';
import MyCities from './../MyCities/MyCities';
import CityDetail from './../CityDetail/CityDetail';
import Login from './../Login/Login';

import Axios from 'axios';

import { Switch, Route, NavLink } from 'react-router-dom';

import { initCities } from './../../store/actions/homeActions';
import { initSavedCities } from './../../store/actions/myCitiesActions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.cityOptions = React.createRef();
        this.state = {
            cities: [],
            selectedCity: null,
            selectedCityData: {}
        }
    }

    componentDidMount = () => {
        Axios.get('https://weather-app-487b0.firebaseio.com/.json')
            .then(response => {
                this.props.initCities({
                    cities: response.data.cities,
                });
                this.props.initSavedCities({
                    savedCities: response.data.savedCities
                })
            })
            .catch(error => {console.log(error);})
    }

    addCityHandler = (city) => {
        let savedCities = [...this.props.savedCities];
        savedCities.push(city);
        Axios.put('https://weather-app-487b0.firebaseio.com/savedCities.json', savedCities)
            .then(response => {
                this.props.initSavedCities({
                    savedCities: savedCities
                })
            })
            .catch(error => {console.log(error)});
    }

    removeCityHandler = (removed_city) => {
        let savedCities = [...this.props.savedCities];
        savedCities = savedCities.filter(city => {
            return city.split(',')[0] !== removed_city;
        })
        Axios.put('https://weather-app-487b0.firebaseio.com/savedCities.json', savedCities)
            .then(response => {
                this.props.initSavedCities({
                    savedCities: savedCities
                })
            })
            .catch(error => {console.log(error);})
    }

    render() {
        return (
            <>
                <div className={styles.Navbar}>
                    <p className={styles.Title}>My Weather Application</p>
                    <div className={styles.NavItemContainer}>
                        <NavLink exact to="/" activeClassName={styles.Active}>
                            <div className={styles.NavItem}>Home</div>
                        </NavLink>
                        <NavLink to="/mycities" activeClassName={styles.Active}>
                            <div className={styles.NavItem}>My Cities</div>
                        </NavLink>
                    </div>
                </div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/mycities" component={() => <MyCities removeCity={this.removeCityHandler} /> } />
                    <Route path="/city/:city" component={CityDetail} />
                    <Route path="/" component={() => <Home  addCity={this.addCityHandler} />} />
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        savedCities: state.myCities.savedCities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initCities: (cities) =>  dispatch(initCities(cities)),
        initSavedCities: (savedCities) => dispatch(initSavedCities(savedCities))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);