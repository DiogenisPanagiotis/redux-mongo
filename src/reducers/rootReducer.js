import { combineReducers } from 'redux';
import statusReducer from './statusReducer';
import anotherReducer from './anotherReducer';

const rootReducer = combineReducers({
    statusReducer,
    anotherReducer
})

export default rootReducer