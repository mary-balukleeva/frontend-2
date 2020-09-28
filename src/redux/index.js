import { combineReducers } from 'redux'
import cities from './cities'
import user from './user'
import weather from './weather'

export default combineReducers({
    cities,
    user,
    weather
})
