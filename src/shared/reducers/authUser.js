import { FETCH_CURRENT_USER } from '../actions/users';

// START WITH NULL, SO WE KNOW IF THE USER IS AUTHENTICATED OR NOT
const authUserReducer = (state = null, action) => {
    // console.log(action);
    switch(action.type)
    {
        // 'DATA' == THE ARRAY WITHIN THE DATA OF THE PROMISE RESPONSE
        // FALSE IF NOT AUTHENTICATED
        case FETCH_CURRENT_USER:
            return action.payload || false;
        default:
            return state;
    }
};

export default authUserReducer;