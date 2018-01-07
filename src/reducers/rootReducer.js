import { combineReducers } from 'redux';
import statusReducer from './statusReducer';
import anotherReducer from './anotherReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    statusReducer,
    anotherReducer,
    userReducer
})

export default rootReducer