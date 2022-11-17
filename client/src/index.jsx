import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_PUBLIC_GOOGLE_API_TOKEN}>
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
