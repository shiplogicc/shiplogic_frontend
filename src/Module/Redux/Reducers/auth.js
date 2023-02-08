import { ActionTypes } from "../Constants";
const initialState = {
    data: null,
    userProfile: null,
    isAuthenticated: false,
    isLogout: false,
    loginFailure: null,
};

export const authentication = (state = initialState, action) => {
    const payload = action.payload
    switch (action.type) {
        case ActionTypes.AUTHORIZATION:
            return { ...state, data: payload };
        case ActionTypes.USER_PROFILE:
            return { ...state, userProfile: payload };
        case ActionTypes.VALIDATE_SESSION:
            return { ...state, isAuthenticated: payload };
        case ActionTypes.LOGOUT:
            return { ...state, isLogout: payload };
        case ActionTypes.LOGIN_FAILURE:
            return { ...state, loginFailure: payload };
        default:
            return state;
    };
};