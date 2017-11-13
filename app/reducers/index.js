import { combineReducers } from 'redux'
import user from './user'
import messages from './messages'
import repositories from './repositories'
import filterData from './filterRepositories'
import starGazers from './starGazers'
import activePage from './activePage'

export default combineReducers({
    user,
    repositories,
    filterData,
    starGazers,
    activePage,
    messages,
})
