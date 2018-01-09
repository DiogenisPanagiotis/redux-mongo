import { TOGGLE_FETCHED } from '../constants';

const initialState = {
    fetched: false
}

export default function getReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_FETCHED:
            return {
                fetched: !state.fetched
            }              
        default:
            return state;
    }
}