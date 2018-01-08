import { combineReducers } from 'redux'
import statusReducer from './statusReducer'
import anotherReducer from './anotherReducer'
import userReducer from './userReducer'
import postReducer from './postReducer'
import putReducer from './putReducer'

const rootReducer = combineReducers({
    statusReducer,
    anotherReducer,
    userReducer,
    postReducer,
    putReducer
})

export default rootReducer