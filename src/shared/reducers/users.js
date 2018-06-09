import { FETCH_USERS } from '../actions/users';

const usersReducer = (state = [], action) => {
    switch(action.type)
    {
        // 'DATA' == THE ARRAY WITHIN THE DATA OF THE PROMISE RESPONSE
        case FETCH_USERS:
            return action.payload;
        default:
            return state;
    }
};

export default usersReducer;