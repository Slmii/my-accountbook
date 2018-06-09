import { FETCH_ADMINS } from '../actions/users';

const adminsReducer = (state = [], action) => {
    switch(action.type)
    {
        // 'DATA' == THE ARRAY WITHIN THE DATA OF THE PROMISE RESPONSE
        case FETCH_ADMINS:
            return action.payload;
        default:
            return state;
    }
};

export default adminsReducer;