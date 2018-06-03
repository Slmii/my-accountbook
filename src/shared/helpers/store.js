import axios                            from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk                            from 'redux-thunk';
import reducers                         from '../reducers/combineReducers';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000/api',
        headers: { cookie: req.get('cookie') || '' }
    });
    
    const store = createStore(
        reducers, 
        {}, 
        compose(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
    );

    // .withExtraArgument(axiosInstance)

    return store;
};