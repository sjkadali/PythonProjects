import { configureStore, appyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

const middleware = [thunk]
const store = configureStore(
    rootReducer,
    composeWithDevTools(appyMiddleware(...middleware))
)

export default store