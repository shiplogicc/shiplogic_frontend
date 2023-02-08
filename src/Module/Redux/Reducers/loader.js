import { ActionTypes } from "../Constants";

const initialState = {
    loader: {
        state: false,
        title: 'Loading...'
    },
    linearLoader: false
};

export const loader = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOADER:
            return { ...state, loader: payload };
        case ActionTypes.LINEAR_LOADER:
            return { ...state, linearLoader: payload };
        default:
            return state;
    };
};