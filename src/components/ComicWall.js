
import React from 'react';


const ComicWall = ({comics, openModal}) => {

    const comicList = comics.map(comic => {
        return (
            <div id="comics-thumbnail" className="card" key={comic.id} onClick={() => openModal(comic)}>
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
        
        );
    });

    return (
        <div className="card-columns">
            {comicList}
        </div>
    )
}

export default ComicWall;