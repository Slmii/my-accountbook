import { combineReducers } from 'redux';
import authUserReducer     from './authUser';
import adminsReducer       from './admins';
import usersReducer        from './users';

export default combineReducers({
    users: usersReducer,
    admins: adminsReducer,
    authUser: authUserReducer
});