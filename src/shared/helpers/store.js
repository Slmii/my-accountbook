import axios                            from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk                            from 'redux-thunk';
import keys                             from '../../api/config/keys';
import reducers                         from '../reducers/combineReducers';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: keys.baseURL,
        headers: { 
            cookie: req.get('cookie') || '' 
        }
    });
    
    const store = createStore(
        reducers, 
        {}, 
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );

    return store;
};