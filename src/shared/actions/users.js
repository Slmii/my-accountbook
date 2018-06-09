export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {

    // FETCH ALL THE DATA, IN JSON FORMAT, AND STORE IT IN THE REDUX STORE
    const response = await api.get('/users');
    dispatch({
        type: FETCH_USERS,
        payload: response.data
    })
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {

    // FETCH ALL THE DATA, IN JSON FORMAT, AND STORE IT IN THE REDUX STORE
    const response = await api.get('/current_user');
    dispatch({
        type: FETCH_CURRENT_USER,
        payload: response.data
    })
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {

    // FETCH ALL THE DATA, IN JSON FORMAT, AND STORE IT IN THE REDUX STORE
    const response = await api.get('/admins');
    dispatch({
        type: FETCH_ADMINS,
        payload: response.data
    })
};