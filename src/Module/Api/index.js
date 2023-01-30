import Interceptor from "./Interceptor";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const apiMiddleware = async (params) => {
    const { url, method, payload } = params;
    const response = await Interceptor(params);
    if (response) {
        return response;
        const status = response.status;
        
    };
};