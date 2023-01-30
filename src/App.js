
import './App.css';
import NavigationScroll from './Module/Navigations/navigationScroll';
import Routes from './Module/Routes';
import DefaultTheme from './Module/Theme/defaultTheme';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Component, useEffect } from 'react';
import Loader from './Module/Loader/overlayLoader';
import SessionManager from './Module/Session/sessionManager';
import { connect } from 'react-redux';
import { compose } from 'redux';

const withRouter = Component => props => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return <Component {...props} router={{ location, navigate, params }} />;
}

function App(props) {
  const navigate = useNavigate();
  const mainProps = { ...props, ...navigate }

  return (
    <DefaultTheme {...mainProps}>
      <NavigationScroll {...mainProps}>
        <SessionManager {...mainProps} />
        <Loader {...mainProps} />
        <Routes {...mainProps} />
      </NavigationScroll>
    </DefaultTheme>
  );
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps) (withRouter(App));
