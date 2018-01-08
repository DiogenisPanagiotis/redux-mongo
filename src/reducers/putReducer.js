import { PUT_MODEL_ID, PUT_MODEL_NAME } from '../constants';

const initialState = {
	modelName: '',
	modelId: ''
}

export default function putReducer(state = initialState, action) {
    switch (action.type) {
        case PUT_MODEL_ID:
            return {
                ...state,
                modelId: action.payload.modelId
            }    
        case PUT_MODEL_NAME:
            return {
                ...state,
                modelName: action.payload.modelName,
            }                
        default:
            return state;
    }
}