import { combineReducers } from 'redux';
import { api } from './api';
import { authentication } from './auth';
import { feedback } from './feedback';
import { loader } from './loader';
import { masters } from './master';
import { nav } from './nav';


const reducer = combineReducers({
    loader: loader,
    authentication: authentication,
    nav: nav,
    feedback: feedback,
    masters: masters,
    api: api,
});

const rootReducer =(state, action) =>{
    if (action.type === "RESET_STORE"){
        state = undefined;
    }
    return reducer(state, action);
};

export default rootReducer;
