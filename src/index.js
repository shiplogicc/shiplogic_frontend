import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { persistor, store } from './Module/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import config from './config';
import { Backdrop, CircularProgress, StyledEngineProvider, Typography } from '@mui/material';

function Loading(){
  return (
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
    >
        <CircularProgress color="inherit"  />
        <Typography sx={{ m: 2 }}>Loading...</Typography>
    </Backdrop>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const onBeforeList = () =>{
  console.log('Loading....')
}
root.render(
< StyledEngineProvider injectFirst >
    <Provider store={store}>
      <PersistGate  persistor={persistor} >
        <BrowserRouter basename={config.basename}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StyledEngineProvider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
