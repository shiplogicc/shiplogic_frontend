import { ActionTypes } from '../Constants';

export const loader = (payload) => {
    return {
        type: ActionTypes.LOADER,
        payload: payload
    };
};