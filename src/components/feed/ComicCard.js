import React from 'react'

const ComicCard = ({comic}) => {
    return (
        <div className="card">
            <div className="thumbnail-container">
                <img
                    src={ comic.image_url }
                    className="card-img-top thumbnail"
                    alt={ comic.title }
                />
            </div>


            <div className="card-body">
                <h3 className="card-title">{ comic.title }</h3>
                <p className="card-text">{ comic.description }</p>
            </div>
            </div>
    )
}

export default ComicCard
