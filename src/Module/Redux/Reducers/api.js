import { ActionTypes } from "../Constants";

const initialState = {
    progress: 0,
    requestTime : 0,
};

export const api = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.REQUEST_PROGRESS:
            return { ...state, progress: payload };
            case ActionTypes.REQUEST_TIME:
            return { ...state, requestTime: payload };
        default:
            return state;
    };
};