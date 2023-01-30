import { apiMiddleware } from "../../Api";

export const actionInterceptor = async (params) => {
    const { router, action, dispatch } = params;
    const response = await apiMiddleware(params);
    const status = response.status;
    if (action === "VALIDATE_SESSION") {
        if (status === 200){
            dispatch({ type: action, payload: true });
            //return router('/');
        }else if(status === 401){
            dispatch({ type: action, payload: false });
        }; 
    }else {
        if (status === 200){
            if (response.data.status && response.data.status === "success"){
                if (action === "LOGOUT"){
                    dispatch({ type: action, payload: true });
                }else{
                    dispatch({ type: action, payload: response.data });
                }
                if (action === "AUTHORIZATION"){
                    dispatch({ type: 'VALIDATE_SESSION', payload: true });
                    router('/')
                }
            }else if (response.data.status && response.data.status === "failed"){
                dispatch({type : "FEEDBACK", payload: {type: "error", message: response.data.message}})
            }
            
        }
    };
    dispatch({type : "LOADER", payload : {state: false, message :""}})
    switch (status) {
        case 401:
            return router('/login');
        case 403:
            return router('/pageNotFound');
        case 404:
            return router('/pageNotFound');
        case 500:
            return router('/internalServerError');
        default:
            return response;
    };
    return true;
};