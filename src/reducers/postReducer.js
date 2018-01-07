import { POST_MODEL_NAME, ADD_MODEL, RESET_POSTED, 
		RESET_MODEL_NAME, FULFILLED } from '../constants';

const initialState = {
	modelName: '',
	posted: false
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case POST_MODEL_NAME:
            return {
                modelName: action.payload
            }
		case `${ADD_MODEL}_${FULFILLED}`:
            return {
            	...state,
                posted: true
            }
		case RESET_POSTED:
            return {
            	...state,
                posted: false
            }
		case RESET_MODEL_NAME:
            return {
            	...state,
                modelName: ''
            }                 
        default:
            return state;
    }
}