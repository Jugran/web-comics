
import { combineReducers } from 'redux'

import authReducer from './authReducer'
import comicFeedReducer from './comicFeedReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    comic: comicFeedReducer
})


export default rootReducer;