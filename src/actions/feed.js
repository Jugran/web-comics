

export const fetchComics = (dispatch) => {
    fetch('feed/latest')
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'FETCH_COMICS', comics: data.comics})
        })
}
