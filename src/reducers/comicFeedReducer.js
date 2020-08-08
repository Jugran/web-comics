
const initState = {
    comics: [{
        "id": 1,
        "name": "Loading Artist",
        "title": "Emailing it in",
        "comic_url": "https://loadingartist.com/comic/emailing-it-in/",
        "description": null,
        "image_url": "https://loadingartist.com/wp-content/uploads/2020/05/2020-05-14-emailing-it-in.jpg"
    },
    {
        "id": 2,
        "name": "Loading Artist",
        "title": "Stuck Up",
        "comic_url": "https://loadingartist.com/comic/stuck-up/",
        "description": null,
        "image_url": "https://loadingartist.com/wp-content/uploads/2020/05/2020-05-07-stuck-up.jpg"
    }]
};

const comicFeedReducer = (state=initState, action) => {

    switch (action.type){
        case 'FETCH_COMICS':
            return {
                ...state,
                comics : [...state.comics, ...action.comics]
            };

        default:
            return state;
    }
}

export default comicFeedReducer;