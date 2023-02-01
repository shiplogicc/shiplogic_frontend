import { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from 'react-router';
import { validateSession } from '../Redux/Actions/auth';
import { ActionTypes } from '../Redux/Constants';


export default function SessionManager(props) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const auth = useSelector(state => state.authentication.data);
    const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);
    const checkSession = async () => {
        if (auth) {
            if (isAuthenticated) {
                if (location.pathname === "/login") {
                    return navigate('/');
                }
            } else {
                dispatch({ type: ActionTypes.AUTHORIZATION, payload: null });
                return navigate('/login');
            };
            const currentTime = new Date();
            const expires = new Date(auth.expires);
            await dispatch(validateSession(navigate));
            if (currentTime > expires) {
                dispatch({ type: ActionTypes.AUTHORIZATION, payload: null });
                dispatch({ type: ActionTypes.VALIDATE_SESSION, payload: false });
                return navigate('/login')
            }
        } else {
            dispatch({ type: ActionTypes.AUTHORIZATION, payload: null });
            dispatch({ type: ActionTypes.VALIDATE_SESSION, payload: false });
            return navigate('/login');
        };
    };
    const onFocus = () => {
        console.log('load')
        checkSession();
    };
    useEffect(() => {
        window.addEventListener("load", onFocus);
        checkSession();
        return () => {
            window.removeEventListener("load", onFocus);
        }
    }, []);
    return null;
};