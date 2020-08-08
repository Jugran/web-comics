
import { combineReducers } from 'redux'

import authReducer from './authReducer'
import comicFeedReducer from './comicFeedReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    feed: comicFeedReducer
})


export default rootReducer;