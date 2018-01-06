import { ADD_MODEL, GET_MODELS, PENDING, FULFILLED, REJECTED } from '../constants';

const initialState = {}

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_MODELS}_${PENDING}`:
        case `${ADD_MODEL}_${PENDING}`:
            return {
                status: PENDING
            }
        case `${GET_MODELS}_${FULFILLED}`:
        case `${ADD_MODEL}_${FULFILLED}`:
            return {
                status: FULFILLED
            }
        case `${GET_MODELS}_${REJECTED}`:
        case `${ADD_MODEL}_${REJECTED}`:
            return {
                status: REJECTED
            }
        default:
            return state;
    }
}