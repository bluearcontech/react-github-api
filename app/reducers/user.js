import * as types from '../actions/types'

const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_REQUEST:
            return action.username
        case types.GET_USER_INFO:
            return action.user
        default:
            return state
    }
}
