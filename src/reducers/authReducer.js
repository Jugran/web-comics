const initialState = {
    user_id : null,
    authError: null,
    is_authenticated: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user_id: action.data.user_id,
                authError: null,
                is_authenticated: true
            }
        case 'LOGIN_FAILED':
        case 'SIGNUP_FAILED':
            return {
                ...state,
                user_id: null,
                authError: action.data.error,
                is_authenticated: false
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                user_id: null,
                authError: null,
                is_authenticated: false
            }
        default:
            return state
    }
}


export default authReducer;