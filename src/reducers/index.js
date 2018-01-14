import { combineReducers } from 'redux'
import HomeReducer from './HomeReducers'

export default combineReducers({
    home: HomeReducer
})