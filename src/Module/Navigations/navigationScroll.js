import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { sessionManager } from '../Redux/Actions/session';

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //

const NavigationScroll = ({ children }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state => state.authentication);
    const { pathname } = location;
    useEffect(() => {
        sessionManager({state: auth, dispatch, navigate, location})
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return children || null;
};

NavigationScroll.propTypes = {
    children: PropTypes.node
};

export default NavigationScroll;
