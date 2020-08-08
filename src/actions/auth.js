
// TODO: add localStorage to store redux data

export const signIn = (dispatch, credentials) => {
    fetch('auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response => {
        switch(response.status){
            case 200:
                response.json().then(resp => {
                    console.log('LOGIN SUCCESS', resp.data);
                    dispatch({type: 'LOGIN_SUCCESS', data: {user_id: resp.data.user_id}})
                })
                break;
            case 401:
                dispatch({type: 'LOGIN_FAILED', data: {error: 'Invalid login details'}})
                break;
            default:
                dispatch({type: 'LOGIN_FAILED', data: {error: response.status}})
        }
    })
    .catch((error) => {
        // console.log('ERROR: ' + error);
        dispatch({type: 'LOGIN_FAILED', data: {error: error}})
    });
}
