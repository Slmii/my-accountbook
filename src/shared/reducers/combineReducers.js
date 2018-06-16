import { combineReducers } from 'redux';
import adminsReducer       from './admins';
import authUserReducer     from './authUser';
import usersReducer        from './users';

export default combineReducers({
    users: usersReducer,
    admins: adminsReducer,
    authUser: authUserReducer
});