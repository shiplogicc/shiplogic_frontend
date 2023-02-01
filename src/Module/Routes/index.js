import { useRoutes } from 'react-router-dom';

// routes
import {MainRoutes, ErrorRoutes} from './mainRoutes';
import AuthenticationRoutes from './authenticationRoute';
//import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

function NavRoutes(props) {
    return useRoutes([MainRoutes, AuthenticationRoutes, ErrorRoutes]);
}

export default NavRoutes;
