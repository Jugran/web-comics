
import React from 'react'
import ComicCard from './ComicCard'

const ComicList = ({comics, openModal}) => {

    return (
        <div className="card-columns">
            { comics && comics.map( comic => <ComicCard key={comic.id} comic={comic} onClick={() => openModal(comic)} />)}
        </div>
    )
}

export default ComicList;