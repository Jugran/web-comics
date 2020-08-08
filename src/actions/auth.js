

export const signIn = (dispatch, credentials) => {
    fetch('auth/login', {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(data => dispatch({type: 'LOGIN_SUCCESS', data: {user_id: data.user_id}}))
    .catch((error) => {
        console.error('ERROR: ', error);
        dispatch({type: 'LOGIN_FAILED', data: {error: error}})
    });
}
