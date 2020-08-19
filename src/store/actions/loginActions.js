import { myFirebase } from "../../firebase/firebase"

export const onLogin = (payload) => {
    console.log(payload);
    return dispatch => {
        myFirebase.auth().signInWithEmailAndPassword(payload.username, payload.password)
                .then(user => {
                    dispatch(loginSuccess({user: user}));
                })
                .catch(error => {
                    dispatch(loginFailed());
                })
    }
}

export const loginSuccess = (payload) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: payload
    }
}

export const loginFailed = () => {
    return{
        type: 'LOGIN_FAIL'
    }
}