import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.bookwormJWT) {
  const user = { token: localStorage.bookwormJWT };
  store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
