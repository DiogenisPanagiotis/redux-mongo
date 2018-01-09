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
                email: action.payload.email
            }    
        case LOGIN_PASSWORD:
            return {
                ...state,
                password: action.payload.password
            }
        case INVALID_LOGIN:
            return {
                ...state,
                invalid: !state.invalid
            }                   
        default:
            return state;
    }
}