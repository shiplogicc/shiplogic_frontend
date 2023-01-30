import { ActionTypes } from "../Constants";

const initialState = {
    loader: {
        state: false,
        title: 'Loading...'
    }
};

export const loader = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOADER:
            return { ...state, loader: payload };
        default:
            return state;
    };
};