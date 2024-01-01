import {combineReducers} from 'redux'
import { signupReducer } from './authentication/signupReducer'
import { errorReducer } from './error/errorReducer'

const rootReducer = combineReducers({
    signupReducer,
    errorReducer
})

export default rootReducer