import { combineReducers }      from 'redux';
import { reducer as reduxForm } from 'redux-form';
import adminsReducer            from './admins';
import authUserReducer          from './authUser';
import surveysReducer           from './surveys';
import usersReducer             from './users';

export default combineReducers({
    users: usersReducer,
    admins: adminsReducer,
    surveys: surveysReducer,
    authUser: authUserReducer,
    form: reduxForm
});