import { combineReducers } from 'redux';
import { authentication } from './auth';
import { feedback } from './feedback';
import { loader } from './loader';
import { nav } from './nav';

const MIGRATION_DEBUG = false;

const reducer = combineReducers({
    loader: loader,
    authentication: authentication,
    nav: nav,
    feedback: feedback
});

const rootReducer =(state, action) =>{
    if (action.type === "LOGOUT"){
        state = undefined;
    }
    return reducer(state, action);
};

export default rootReducer;
