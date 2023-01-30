import axios from 'axios';
import { apiMiddleware } from '..';
import { Constants } from '../Constants'
import { interceptor } from '../Interceptor';
import { redirect } from "react-router";

export const validateSession = (payload={})=> {
    

    const response = apiMiddleware('/auth/validateSession/', 'get', payload)
    return response
}

export const login = (payload = {}) => {
   return apiMiddleware('/auth/getToken/', 'post', payload)
}

export const getMenu = (route) => {
//    const response = requestApi('/role/menu/', 'get', {}, route)
//    console.log("GetMenu==", response)
}