import { ActionTypes } from "../Constants";
import { actionInterceptor } from "./actionInterceptor";
import { showLinearLoader } from "./loader";
import { masterIndex } from "./master";
import { setAccessedMenu } from "./nav";

export const getToken = (navigate, payload = {}) => async (dispatch, getState) => {
    dispatch({ type : ActionTypes.LOADER, payload: {state:true, title:"Logging..."}})
    const url = '/auth/getToken/';
    const method = 'post';
    const params = {router: navigate, action: ActionTypes.AUTHORIZATION, dispatch, getState, url, method, payload };
    const response = await actionInterceptor(params);
    if (response.data.status && response.data.status === "success"){
        dispatch({ type: ActionTypes.VALIDATE_SESSION, payload: true });
        dispatch({ type: ActionTypes.AUTHORIZATION, payload: response.data });
        dispatch({ type: ActionTypes.LOGOUT, payload: false });
        dispatch(getAccountDetail(navigate))
        dispatch(masterIndex(navigate))
        dispatch(setAccessedMenu({id:1, title:"Dashboard", url:'/dashboard'}))
        navigate('/dashboard')
    }else if (response.data.status && response.data.status === "failed"){
        dispatch(loginResponse(response.data))
        dispatch({ type: ActionTypes.VALIDATE_SESSION, payload: false });
        dispatch({ type: ActionTypes.AUTHORIZATION, payload: null });
    }
}

export const getAccountDetail = (navigate, payload = {}) => async (dispatch, getState) => {
    //dispatch({ type : ActionTypes.LOADER, payload: {state:true, title:"Fetching..."}})
    const url = '/auth/account/';
    const method = 'get';
    const params = {router: navigate, action: ActionTypes.USER_PROFILE, dispatch, getState, url, method, payload };
    const response = await actionInterceptor(params);
    dispatch({ type : ActionTypes.USER_PROFILE, payload: response.data.data})
}

export const validateSession = (navigate, payload = {}) => async (dispatch, getState) => {
    dispatch(showLinearLoader(true))
    const url = '/auth/validateSession/';
    const method = 'get';
    const params = { router: navigate, action: ActionTypes.VALIDATE_SESSION, dispatch, getState, url, method, payload };
    await actionInterceptor(params);
    dispatch(showLinearLoader(false))
    //dispatch(masterIndex(navigate))
}

export const logout = (navigate, payload = {}) => async (dispatch, getState) => {
    dispatch({ type : ActionTypes.LOADER, payload: {state:true, title:"Logging Out..."}})
    const url = '/auth/logout/';
    const method = 'get';
    const params = { router: navigate, action: ActionTypes.LOGOUT, dispatch, getState, url, method, payload };
    const response = await actionInterceptor(params);
    dispatch({ type: ActionTypes.LOGOUT, payload: true });
    dispatch({ type: ActionTypes.RESET_STORE, payload: true });
    navigate('/login')
}

export const loginResponse = (payload) =>{
    return {
        type: ActionTypes.LOGIN_FAILURE,
        payload: payload
    }
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