import { ActionTypes } from "../Constants";

const initialState = {
    showOnlyIcon: false,
    showFullMenu: false,
    menuCollapse: false,
    accessedMenu: null,
    accessedSubMenu: null
};

export const nav = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ACCESSED_MENU:
            return { ...state, accessedMenu: payload };
        case ActionTypes.ACCESSED_SUB_MENU:
            return { ...state, accessedSubMenu: payload };
        case ActionTypes.MENU_COLLAPSE:
            return { ...state, menuCollapse: payload };
        case ActionTypes.SHOW_ONLY_MENU_ICON:
            return { ...state, showOnlyIcon: payload };
        case ActionTypes.SHOW_FULL_MENU:
            return { ...state, showFullMenu: payload };
        default:
            return state;
    };
};