
import React, { useEffect } from 'react';


const ImageModal = ({comic, closeModal}) => {

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return function cleanup(){
            document.body.classList.remove('overflow-hidden');
        }
    });

    return (
        <div id="image-viewer" className="modal-viewer overflow-hidden d-flex">
            <div id="modal-background" className="modal-background" onClick={closeModal}></div>

            <button id="close-button" type="button" className="close text-white" aria-label="Close" onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
            </button>

            <div className="modal-content-container m-auto p-sm-3">

                <div className="image-wrapper">
                    <img id="modal-image" 
                        className="img-fluid" 
                        src={ comic.image_url }
                        alt={ comic.description }
                    />
                </div>
                
                <div className="comic-info card text-white bg-info mb-3 mx-auto w-100">
                    <div id="comic-name" className="card-header">
                        { comic.name }
                    </div>

                    <div className="card-body">
                        <h5 id="comic-title" className="card-title">
                            { comic.title }
                        </h5>
                        <p id="comic-description" className="card-text">
                            { comic.description }
                        </p>
                    </div>
                </div>
             </div>
        </div>

    );

}


export default ImageModal;




