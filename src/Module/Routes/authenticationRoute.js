import { createBrowserHistory } from 'history';
import { Component, lazy } from 'react';
import { connect } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';

// project imports
import Loadable from "../Navigations/loadable";
//import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const Login = Loadable(lazy(() => import('../UIComponents/Authentications/login')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/login',
    element: <Login />
}




export default AuthenticationRoutes;
