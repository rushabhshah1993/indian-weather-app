export const initialState = {
    isAuthenticated: false,
    userFail: false
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS': {
            let updatedState = {...state};
            updatedState.isAuthenticated = true;
            updatedState.username = action.payload.user;
            return updatedState;
        }
        case 'LOGIN_FAIL': {
            let updatedState = {...state};
            updatedState.isAuthenticated = false;
            updatedState.userFail = true;
            return updatedState;
        }
        default: return state;
    }
}

export default loginReducer;