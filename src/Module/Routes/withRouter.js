
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

const withRouter = Component => props => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

export default withRouter;