import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from 'react-router';
import { setAuthorized, validateSession } from '../Redux/Actions/auth';
import { ActionTypes } from '../Redux/Constants';


export default function SessionManager(props) {
    //console.log("SessionProps", props)
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const auth = useSelector(state => state.authentication.data);
    const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);
    const checkSession = async () => {
        if (auth) {
            const currentTime = new Date();
            const expires = new Date(auth.expires);
            await dispatch(validateSession(navigate));
            if (currentTime > expires) {
                dispatch({ type: ActionTypes.AUTHORIZATION, payload: null });
                dispatch({ type: ActionTypes.VALIDATE_SESSION, payload: false });
                return navigate('/login')
            } else {
                if (isAuthenticated) {
                    if (location.pathname === "/login") {
                        return navigate('/');
                    }
                } else {
                    dispatch({ type: ActionTypes.AUTHORIZATION, payload: null });
                    return navigate('/login');
                };
            };
        } else {
            dispatch({ type: ActionTypes.AUTHORIZATION, payload: null });
            dispatch({ type: ActionTypes.VALIDATE_SESSION, payload: false });
            return navigate('/login');
        };
    };
    const onFocus = () => {
        checkSession();
    };
    useEffect(() => {
        window.addEventListener("focus", onFocus);
        checkSession();
        return () => {
            window.removeEventListener("focus", onFocus);
        }
    }, []);
    return null;
};