import { ActionTypes } from "../Constants";
import { actionInterceptor } from "./actionInterceptor";

export const showFeedback = (payload) => {
    return {
        type: ActionTypes.FEEDBACK,
        payload: payload
    }
}