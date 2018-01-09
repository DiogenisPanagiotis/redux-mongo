import { REGISTER_EMAIL, REGISTER_PASSWORD, 
         TOGGLE_REGISTERED, TOGGLE_EMAILTAKEN_TRUE,
         TOGGLE_EMAILTAKEN_FALSE } from '../constants';

const initialState = {
    email: '',
    password: '',
    registered: false,
    emailTaken: false
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_EMAIL:
            return {
                ...state,
                email: action.payload.email,
                emailTaken: false
            }    
        case REGISTER_PASSWORD:
            return {
                ...state,
                password: action.payload.password,
                emailTaken: false
            }
        case TOGGLE_REGISTERED:
            return {
                ...state,
                registered: true
            }    
        case TOGGLE_EMAILTAKEN_TRUE:
            return {
                ...state,
                emailTaken: true
            }
        case TOGGLE_EMAILTAKEN_FALSE:
            return {
                ...state,
                emailTaken: false
            }                     
        default:
            return state;
    }
}