
const initState = {
    comics: []
};

const comicFeedReducer = (state=initState, action) => {

    switch (action.type){
        case 'FETCH_COMICS':
            return {
                ...state,
                comics : [...action.comics]
            };

        default:
            return state;
    }
}

export default comicFeedReducer;