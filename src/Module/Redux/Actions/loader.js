import { ActionTypes } from '../Constants';

export const loader = (payload) => {
    return {
        type: ActionTypes.LOADER,
        payload: payload
    };
};

export const showLinearLoader = (payload) => {
    return {
        type: ActionTypes.LINEAR_LOADER,
        payload: payload
    };
};