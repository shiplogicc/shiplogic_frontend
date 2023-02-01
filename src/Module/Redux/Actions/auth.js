import { ActionTypes } from "../Constants";
import { actionInterceptor } from "./actionInterceptor";

export const getToken = (navigate, payload = {}) => async (dispatch, getState) => {
    dispatch({ type : ActionTypes.LOADER, payload: {state:true, title:"Logging..."}})
    const url = '/auth/getToken/';
    const method = 'post';
    const params = {router: navigate, action: ActionTypes.AUTHORIZATION, dispatch, getState, url, method, payload };
    await actionInterceptor(params);
}

export const validateSession = (navigate, payload = {}) => async (dispatch, getState) => {
    const url = '/auth/validateSession/';
    const method = 'get';
    const params = { router: navigate, action: ActionTypes.VALIDATE_SESSION, dispatch, getState, url, method, payload };
    await actionInterceptor(params);
}

export const logout = (navigate, payload = {}) => async (dispatch, getState) => {
    dispatch({ type : ActionTypes.LOADER, payload: {state:true, title:"Logging Out..."}})
    const url = '/auth/logout/';
    const method = 'get';
    const params = { router: navigate, action: ActionTypes.LOGOUT, dispatch, getState, url, method, payload };
    await actionInterceptor(params);
}

export const setAuthorized = (payload) => {
    return {
        type: ActionTypes.USER_AUTHORIZED,
        payload: payload
    }
}

export const setProfileData = (payload) => {
    return {
        type: ActionTypes.USER_PROFILE,
        payload: payload
    }
}