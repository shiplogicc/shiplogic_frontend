import { ActionTypes } from "../Constants";
import { getAccountDetail, validateSession } from "./auth"
import { loader } from "./loader"

export const sessionManager = async ({ state, dispatch, navigate, location }) => {
    const {data, isAuthenticated} = state;
    if (isAuthenticated) {
        dispatch(loader({ state: true, title: "Loading..." }))
        //dispatch(getAccountDetail(navigate))
        dispatch(validateSession(navigate));
        if (location.pathname === '/login'){
            navigate('/')
        }
        return true
    }else{
        dispatch({ type: ActionTypes.RESET_STORE, payload: true });
        return navigate('/login')
    }

}