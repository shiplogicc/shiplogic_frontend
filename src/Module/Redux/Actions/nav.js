import { ActionTypes } from "../Constants";

export const menuCollapse = (payload) =>{
    return {
        type : ActionTypes.MENU_COLLAPSE,
        payload : payload
    }
}

export const setAccessedMenu = (payload) =>{
    return {
        type : ActionTypes.ACCESSED_MENU,
        payload : payload
    }
}

export const setAccessedSubMenu = (payload) =>{
    return {
        type : ActionTypes.ACCESSED_SUB_MENU,
        payload : payload
    }
}

export const showOnlyIcon = (payload) =>{
    return {
        type : ActionTypes.SHOW_ONLY_MENU_ICON,
        payload : payload
    }
}

export const showFullMenu = (payload) =>{
    return {
        type : ActionTypes.SHOW_FULL_MENU,
        payload : payload
    }
}