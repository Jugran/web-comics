
export const loadState = () => {
    try{
        const serializableState = sessionStorage.getItem('authState');

        if (serializableState === null){
            return undefined;
        }
        return JSON.parse(serializableState)
    }
    catch(err){
        return undefined;
    }
}

export const saveState = (state) => {
    try{
        const authState = {
            auth: { ...state.auth, authError: null}
        }
        const serializedState = JSON.stringify(authState);
        sessionStorage.setItem('authState', serializedState)
    }
    catch(err){
        console.error(err);
    }
}