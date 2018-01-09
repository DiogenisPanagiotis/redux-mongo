import { combineReducers } from 'redux'
import statusReducer from './statusReducer'
import anotherReducer from './anotherReducer'
import userReducer from './userReducer'
import postReducer from './postReducer'
import putReducer from './putReducer'
import deleteReducer from './deleteReducer'
import getReducer from './getReducer'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'

const rootReducer = combineReducers({
    statusReducer,
    anotherReducer,
    userReducer,
    postReducer,
    putReducer,
    deleteReducer,
    getReducer,
    loginReducer,
    registerReducer
})

export default rootReducer