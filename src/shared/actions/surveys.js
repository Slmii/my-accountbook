export const FETCH_SURVEYS = 'fetch_surveys';

// THESE ARE THE ACTIONS THAT GET CALLED IN THE  'loadData' FUNCTIONS IN THE FRONT-END
// THESE ACTIONS THEN CALL THE REDUCERS THROUGH THE 'dispatch({})' FUNCTION

export const fetchSurveys = () => async (dispatch, getState, api) => {
    // FETCH ALL THE DATA, IN JSON FORMAT, AND STORE IT IN THE REDUX STORE
    const response = await api.get('/surveys');
    dispatch({
        type: FETCH_SURVEYS,
        // 'DATA' == THE KEY/VALUE WITHIN THE DATA OF THE PROMISE RESPONSE
        payload: response.data
    });
};