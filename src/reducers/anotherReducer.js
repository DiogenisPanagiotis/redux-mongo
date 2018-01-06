import { GET_MODELS, FULFILLED } from '../constants';

const initialState = {}

export default function anotherReducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_MODELS}_${FULFILLED}`:
            return {
                ...state,
                models: action.payload.data
            }
        default:
            return state;
    }
}