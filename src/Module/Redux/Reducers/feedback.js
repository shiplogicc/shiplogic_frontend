import { ActionTypes } from "../Constants";

const initialState = {
    data: null
};

export const feedback = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FEEDBACK:
            return { ...state, data: payload };
        default:
            return state;
    };
};