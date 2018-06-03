import axios                            from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk                            from 'redux-thunk';
import reducers                         from '../reducers/combineReducers';
import keys                             from '../../api/config/keys';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: keys.baseURL,
        headers: { cookie: req.get('cookie') || '' }
    });
    
    const store = createStore(
        reducers, 
        {}, 
        compose(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
    );

    return store;
};