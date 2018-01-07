import { combineReducers } from 'redux'
import statusReducer from './statusReducer'
import anotherReducer from './anotherReducer'
import userReducer from './userReducer'
import postReducer from './postReducer'

const rootReducer = combineReducers({
    statusReducer,
    anotherReducer,
    userReducer,
    postReducer
})

export default rootReducer