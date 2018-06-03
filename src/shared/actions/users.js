export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {

    // FETCH ALL THE DATA, IN JSON FORMAT, AND STORE IT IN THE REDUX STORE
    return await api.get('/users')
    .then((response) => {
        dispatch({
            type: FETCH_USERS,
            response
        })
    });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {

    // FETCH ALL THE DATA, IN JSON FORMAT, AND STORE IT IN THE REDUX STORE
    return await api.get('/current_user')
    .then((response) => {
        dispatch({
            type: FETCH_CURRENT_USER,
            response
        })
    });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {

    // FETCH ALL THE DATA, IN JSON FORMAT, AND STORE IT IN THE REDUX STORE
    return await api.get('/admins')
    .then((response) => {
        dispatch({
            type: FETCH_ADMINS,
            response
        })
    });
};