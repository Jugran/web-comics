
export const loadState = () => {
    try{
        const serializableState = sessionStorage.getItem('state');

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
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState)
    }
    catch(err){
        console.error(err);
    }
}