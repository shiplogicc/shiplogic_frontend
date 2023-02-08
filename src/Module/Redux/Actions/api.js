import { ActionTypes } from "../Constants";
import { actionInterceptor } from "./actionInterceptor";

export const requestProgress = (payload) => {
    return {
        type: ActionTypes.REQUEST_PROGRESS,
        payload: payload
    }
}

export const requestTime = (payload) => {
    return {
        type: ActionTypes.REQUEST_TIME,
        payload: payload
    }
}