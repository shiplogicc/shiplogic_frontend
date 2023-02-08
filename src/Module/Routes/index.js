import { createBrowserRouter, useRoutes } from 'react-router-dom';

// routes
import {MainRoutes, ErrorRoutes} from './mainRoutes';
import AuthenticationRoutes from './authenticationRoute';
import config from '../../config';
//import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

function NavRoutes(props) {
    return useRoutes([MainRoutes, AuthenticationRoutes, ErrorRoutes]);
}
export default NavRoutes;



//export const router = createBrowserRouter([MainRoutes, AuthenticationRoutes, ErrorRoutes], {basename:config.basename});
