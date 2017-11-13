import * as types from '../actions/types'

const initialState = 1

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ACTIVE_PAGE_REQUEST:
        case types.GET_ACTIVE_PAGE_INFO:
            return action.activePage
        case types.INIT_USER_FILTER_REPO_INFO:
        default:
            return state
    }
}
