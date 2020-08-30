
import React from 'react'
import ComicCard from './ComicCard'

const ComicList = ({comics, openModal}) => {

    return (
        <div className="card-columns">
            { comics && comics.map( comic => <ComicCard comic={comic} openModal={openModal} key={comic.id}/>)}
        </div>
    )
}

export default ComicList;