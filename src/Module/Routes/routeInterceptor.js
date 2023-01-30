const routeIntrerceptor = ({dispatch, getState}) => next => action => {
    console.log("Router", getState())
    next(action);
    return false
    const state = getState();
    const location = state.router.location.pathname;
  
    if (action.type === '@@router/LOCATION_CHANGE' && location.includes('play')) {
      dispatch({ type: 'SET_DIALOG_TOGGLE' });
      return Promise.resolve();
    }
    next(action);
  };
  
  export default routeIntrerceptor;