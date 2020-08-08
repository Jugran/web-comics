const initialState = {
    user_id : null,
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user_id: action.data.user_id,
                authError: null
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                user_id: null,
                authError: action.data.error
            }
        default:
            return state
    }
}


export default authReducer;