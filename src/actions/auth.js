
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

export const signOut = (dispatch) => {
    fetch('auth/logout', {
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 201){
            response.json().then(data => {
                console.log('logout succesfull');
                dispatch({type: 'LOGOUT_SUCCESS'});
            })
        }
    })
    .catch((error) => {
        console.log('logout ERROR: ' + error);
        // dispatch({type: 'LOGOUT_FAILED', data: {error: error}})
    });
}

export const signUp = (dispatch, credentials) => {
    fetch('auth/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response => {
        if (response.status === 201){
            console.log('signup successfull! ');
            dispatch({type: 'SIGNUP_SUCCESS'});
        }
        else{
            response.json().then(resp => {
                dispatch({type: 'SIGNUP_FAILED', data: resp.data.message});
            });
        }
    })
    .catch((error) => {
        console.log('signup ERROR: ' + error);
        // dispatch({type: 'LOGOUT_FAILED', data: {error: error}})
    });
}