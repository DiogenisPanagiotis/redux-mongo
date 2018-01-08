import { DELETE_MODEL_ID } from '../constants';

const initialState = {
	modelId: ''
}

export default function deleteReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_MODEL_ID:
            return {
                ...state,
                modelId: action.payload
            }                  
        default:
            return state;
    }
}