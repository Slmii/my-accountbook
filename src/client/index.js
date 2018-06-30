import 'babel-polyfill';
import 'normalize.css/normalize.css';
import '../shared/styles/styles.scss';
import axios             from 'axios';
import React             from 'react';
import { hydrate }       from 'react-dom';
import { Provider }      from 'react-redux';
import { renderRoutes }  from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk             from 'redux-thunk';
import keys              from './config/keys';
import reducers          from '../shared/reducers/combineReducers';
import routes            from '../shared/routes';

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

console.log('KEYS', keys.baseURL);
console.log('STRIPE', keys.stripePublishableKey);
console.log('ENVIRONMENT IS', process.env.NODE_ENV);