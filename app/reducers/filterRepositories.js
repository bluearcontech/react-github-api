import * as types from '../actions/types'

const initialState = {
    filterRepositories: [],
    filterString: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_FILTER_REPO_REQUEST:
        case types.GET_USER_FILTER_REPO_INFO:
            return {
                filterRepositories: action.filterRepositories,
                filterString: action.filterString
            }
        case types.INIT_USER_FILTER_REPO_INFO:
        default:
            return state
    }
}
