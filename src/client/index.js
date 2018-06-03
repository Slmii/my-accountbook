import 'babel-polyfill';
import 'normalize.css/normalize.css';
import '../shared/styles/styles.scss';
import axios             from 'axios';
import React             from 'react';
import { hydrate }       from 'react-dom';
import { renderRoutes }  from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes            from '../shared/routes';
import keys              from '../api/config/keys';

import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk                            from 'redux-thunk';
import reducers                         from '../shared/reducers/combineReducers';

// THIS WILL PREPEND '/API' TO ALL API CALLS BY THE 'ACTIONS'
const axiosInstance = axios.create({
    baseURL: keys.baseURL
});

// THIS WILL BE THE INITIAL_STATE. THE INITIAL_STATE IS THE DATA FETCHED FROM THE SERVER
// THIS WAY THE CLIENT ALREADY HAS DATA, AND WILL RENDER THAT
const store = createStore(
    reducers,
    window.INITIAL_STATE, 
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root-app')  
);