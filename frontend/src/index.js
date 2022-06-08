import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/icons/icons.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
    <ToastContainer />
  </Provider>,
  document.getElementById('root')
);
