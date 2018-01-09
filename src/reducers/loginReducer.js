import { LOGIN_EMAIL, LOGIN_PASSWORD, INVALID_LOGIN } from '../constants';

const initialState = {
	email: '',
	password: '',
    invalid: false
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_EMAIL:
            return {
                ...state,
                email: action.payload.email,
                invalid: false
            }    
        case LOGIN_PASSWORD:
            return {
                ...state,
                password: action.payload.password,
                invalid: false
            }
        case INVALID_LOGIN:
            return {
                ...state,
                invalid: true
            }                   
        default:
            return state;
    }
}