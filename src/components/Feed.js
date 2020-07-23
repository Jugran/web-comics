
import React, { Component } from 'react'

import ComicWall from './ComicWall'
import TopNavbar from './TopNavbar'
import ImageModal from './ImageModal'


class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comics: [],
            displayImage: false,
            openedComic: null
        }   
    }

    componentDidMount(){
        fetch('/feed/latest')
        .then(res => res.json())
        .then(data => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    comics : data.comics
                }
            })
        });
    }

    openModal = (comic) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                displayImage: true,
                openedComic: comic
            }
        })
    }

    closeModal = (e) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                displayImage: false,
                openedComic: null
            }
        })
    }

    render() {
        const comics = this.state.comics;
        const comicList = comics.length ? (<ComicWall comics={comics} openModal={this.openModal} />) :
            (<div className="container center">
                Loading ...
            </div>);

        const modalImage = this.state.displayImage ? (<ImageModal comic={this.state.openedComic} closeModal={this.closeModal} />) : (null);

        return (
            <div>
                <div className={ this.state.displayImage ? 'blur' : '' }>
                    <TopNavbar />
                    <div className="navbar-padding-container">
                        <div className="container" id="comic-container">
                            <div className="jumbotron text-left p-3">
                                <h1 className="display-4">
                                    Latest Comics
                                </h1>
                                <h2 className="lead">
                                    From rss feed.
                                </h2>
                            </div>
                            {comicList}
                        </div>
                    </div>
                </div>
                {modalImage}
            </div>
        );
    }
}


export default Feed;