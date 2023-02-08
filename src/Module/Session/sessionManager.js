import { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from 'react-router';
import { validateSession } from '../Redux/Actions/auth';
import { loader } from '../Redux/Actions/loader';
import { ActionTypes } from '../Redux/Constants';


export default function SessionManager(props) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const auth = useSelector(state => state.authentication.data);
    const loaderData = useSelector(state => state.loader.loader);
    const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);
    const checkSession = async () => {
        dispatch(loader({ state: true, title: "Loading..." }))
        if (auth) {
            if (isAuthenticated) {
                if (location.pathname === "/login") {
                    return navigate('/');
                }
            } else {
                dispatch({ type: ActionTypes.RESET_STORE, payload: true });
                return navigate('/login');
            };
            const currentTime = new Date();
            const expires = new Date(auth.expires);
            await dispatch(validateSession(navigate));
            if (currentTime > expires) {
                dispatch({ type: ActionTypes.RESET_STORE, payload: true });
                return navigate('/login')
            }
            //window.location.reload();
        } else {
            dispatch({ type: ActionTypes.RESET_STORE, payload: true });
            return navigate('/login');
        };
    };
    const onFocus = () => {
        console.log('load')
        checkSession();

    };
    useEffect(() => {
        if (loaderData.state) {
            dispatch(loader({ state: false, title: "Logging..." }))
        }
        window.addEventListener("load", onFocus);
        checkSession();
        return () => {
            window.removeEventListener("load", onFocus);
        }
    }, []);
    return true;
};