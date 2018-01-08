import { combineReducers } from 'redux'
import statusReducer from './statusReducer'
import anotherReducer from './anotherReducer'
import userReducer from './userReducer'
import postReducer from './postReducer'
import putReducer from './putReducer'
import deleteReducer from './deleteReducer'

const rootReducer = combineReducers({
    statusReducer,
    anotherReducer,
    userReducer,
    postReducer,
    putReducer,
    deleteReducer
})

export default rootReducer