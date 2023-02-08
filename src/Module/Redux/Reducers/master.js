import { ActionTypes } from "../Constants";

const initialState = {
    accountTabs: null,
    userMenus: null,
};

export const masters = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ACCOUNT_TABS:
            return { ...state, accountTabs: payload };
        case ActionTypes.USER_MENUS:
            return { ...state, userMenus: payload };
        default:
            return state;
    };
};