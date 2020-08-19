import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Login.css';
import myCitiesStyles from './../MyCities/MyCities.css';

import { onLogin } from './../../store/actions/loginActions';


export class Login extends Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    
    state = {
        usernameValue: '',
        passwordValue: '',
        incompleteForm: false
    }

    static getDerivedStateFromProps(props, state) {
        if(props.login.isAuthenticated === true) {
            props.history.push('/mycities');
        }
        return state;
    }

    usernameChangeHandler = (event) => {
        this.setState({
            usernameValue: event.target.value,
            incompleteForm: false
        })
    }

    passwordChangeHandler = (event) => {
        this.setState({
            passwordValue: event.target.value,
            incompleteForm: false
        })
    }

    loginClickHandler = () => {
        if(this.state.usernameValue.length > 0 && this.state.passwordValue.length > 0) {
            let obj = {
                username: this.state.usernameValue,
                password: this.state.passwordValue
            }
            this.props.onLogin(obj);
        } else {
            this.setState({
                incompleteForm: true
            })
        }
    }

    render() {
        return (
            <div className={styles.Login}>
                <p className={myCitiesStyles.Title}>Log in to your account</p>
                { this.state.incompleteForm ? <p>Username/password is missing.</p> : null }
                { this.props.login.userFail ? <p>Wrong username/password</p> : null }
                <div className={styles.Form}>
                    <input type='text' value={this.state.usernameValue} onChange={this.usernameChangeHandler}></input>
                    <input type='password' value={this.state.passwordValue} onChange={this.passwordChangeHandler}></input>
                    <button className={styles.LoginButton} onClick={this.loginClickHandler}>Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (payload) => dispatch(onLogin(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
