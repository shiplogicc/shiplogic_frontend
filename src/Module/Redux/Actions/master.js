import { ActionTypes } from "../Constants";
import { actionInterceptor } from "./actionInterceptor";

export const getAccountTabs = async(params) => {
    //dispatch({ type : ActionTypes.LOADER, payload: {state:true, title:"Fetching..."}})
    const { dispatch , navigate, getState, payload} = params;
    const url = '/role/tabMenu/?tab_type=ACCOUNT_TABS';
    const method = 'get';
    const newParams = { router: navigate, action: ActionTypes.ACCOUNT_TABS, dispatch, getState, url, method, payload };
    const response = await actionInterceptor(newParams);
    dispatch({ type: ActionTypes.ACCOUNT_TABS, payload: response.data.data })
}

export const getUserMenus = async(params) => {
    //dispatch({ type : ActionTypes.LOADER, payload: {state:true, title:"Fetching..."}})
    const { dispatch , navigate, getState, payload} = params;
    const url = '/role/menus/';
    const method = 'get';
    const newParams = { router: navigate, action: ActionTypes.ACCOUNT_TABS, dispatch, getState: getState, url, method, payload };
    const response = await actionInterceptor(newParams);
    dispatch({ type: ActionTypes.USER_MENUS, payload: response.data.data })
}

export const masterIndex = (navigate, payload = {}) => async (dispatch, getState) => {
    const params = { dispatch, getState, navigate, payload }
    getAccountTabs(params)
    getUserMenus(params)
}