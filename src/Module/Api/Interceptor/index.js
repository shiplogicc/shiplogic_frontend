import axios from 'axios';
import { requestProgress, requestTime } from '../../Redux/Actions/api';
import { Constants } from '../Constants';

function onUploadProgress(ev) {
    console.log(ev);
    // do your thing here
}

function handleUploadProgress(ev) {
    console.log(ev);
    // do your thing here
}

export default function Interceptor(params) {
    const { url, method, payload, getState, dispatch } = params;
    dispatch(requestProgress(0))
    dispatch(requestTime(0))
    var token = '';
    const state = getState();
    if (state.authentication.data) {
        token = state.authentication.data.access_token;
    };
    var startTime = 0;
    const instance = axios.create({
        baseURL: Constants.API_URL,
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
        timeout: 20000,
        timeoutErrorMessage: "Request Timeout"
    });
    instance.interceptors.request.use(function (config) {
        startTime = new Date().getTime();
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    instance.interceptors.response.use(function (response) {
        const endTime = new Date().getTime()
        const seconds = parseFloat((endTime - startTime) / 1000).toFixed(2)
        dispatch(requestTime(seconds))
        return response;
    }, function (error) {
        const status = error.response.status;
        return Promise.reject(error);
    });
    return instance.request({
        url: url, method: method, data: payload, onDownloadProgress: e => {
            console.log(e)
            let percentCompleted = Math.floor(e.loaded * 100 / e.total);
            console.log("compl:", percentCompleted)
            dispatch(requestProgress(percentCompleted));

        }
    }
    ).then(response => {
        return response;
    }).catch(error => {
        return error.response;
    });
};
