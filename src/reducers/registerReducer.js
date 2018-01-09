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
                email: action.payload.email
            }    
        case REGISTER_PASSWORD:
            return {
                ...state,
                password: action.payload.password
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