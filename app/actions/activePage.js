import * as types from './types'

export const setActivePageRequest = (activePage) => ({
    type: types.SET_ACTIVE_PAGE_REQUEST,
    activePage
})

export const getActivePageInfo = (activePage) => ({
    type: types.GET_ACTIVE_PAGE_INFO ,
    activePage
})