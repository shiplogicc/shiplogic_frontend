import axios from 'axios';
import { Constants } from '../Constants';

export default function Interceptor(params) {
    const { url, method, payload, getState } = params;
    var token = '';
    const state = getState();
    if (state.authentication.data) {
        token = state.authentication.data.access_token;
    };
    const instance = axios.create({
        baseURL: Constants.API_URL,
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
    });
    instance.interceptors.request.use(function (config) {
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    instance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const status = error.response.status;
        return Promise.reject(error);
    });
    return instance.request({ url: url, method: method, data: payload }).then(response => {
        return response;
    }).catch(error => {
        return error.response;
    });
};
