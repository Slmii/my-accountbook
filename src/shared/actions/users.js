export const FETCH_USERS        = 'fetch_users';
export const FETCH_CURRENT_USER = 'fetch_current_user';
export const FETCH_ADMINS       = 'fetch_admins';

// THESE ARE THE ACTIONS THAT GET CALLED IN THE  'loadData' FUNCTIONS IN THE FRONT-END

export const fetchUsers = () => async (dispatch, getState, api) => {
    // FETCH ALL THE DATA, IN JSON FORMAT, AND STORE IT IN THE REDUX STORE
    const response = await api.get('/users');
    dispatch({
        type: FETCH_USERS,
        payload: response.data
    });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    // FETCH ALL THE DATA, IN JSON FORMAT, AND STORE IT IN THE REDUX STORE
    const response = await api.get('/current_user');
    dispatch({
        type: FETCH_CURRENT_USER,
        // 'DATA' == THE KEY/VALUE WITHIN THE DATA OF THE PROMISE RESPONSE
        payload: response.data
    });
};

export const fetchAdmins = () => async (dispatch, getState, api) => {
    // FETCH ALL THE DATA, IN JSON FORMAT, AND STORE IT IN THE REDUX STORE
    const response = await api.get('/admins');
    dispatch({
        type: FETCH_ADMINS,
        // 'DATA' == THE KEY/VALUE WITHIN THE DATA OF THE PROMISE RESPONSE
        payload: response.data
    });
};

export const handleToken = (token) => async (dispatch, getState, api) => {
    // FETCH ALL THE DATA, IN JSON FORMAT, AND STORE IT IN THE REDUX STORE
    const response = await api.post('/stripe', {
        token
    });

    dispatch({
        type: FETCH_CURRENT_USER,
        // 'DATA' == THE KEY/VALUE WITHIN THE DATA OF THE PROMISE RESPONSE
        payload: response.data
    });
};