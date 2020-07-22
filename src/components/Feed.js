
import React, { Component } from 'react'

import ComicWall from './ComicWall'
import TopNavbar from './TopNavbar'
import ImageModal from './ImageModal'

function get_comics() {
    let comics = [{
        name: "xkcd.com",
        title: "Hamster Ball 2",
        comic_url: "https://xkcd.com/2331/",
        description: "The worst is being teased by responsible, mask-wearing teens. They even spritz the hamster ball with disinfectant before rolling it, carefully avoiding the filter vents.",
        image_url: "https://imgs.xkcd.com/comics/hamster_ball_2.png"
    },
    {
        name: "xkcd.com",
        title: "Acceptable Risk",
        comic_url: "https://xkcd.com/2330/",
        description: "Good thing I'm not already prone to overthinking everyday decisions!",
        image_url: "https://imgs.xkcd.com/comics/acceptable_risk.png"
    },
    {
        name: "xkcd.com",
        title: "Universal Rating Scale",
        comic_url: "https://xkcd.com/2329/",
        description: "There are plenty of finer gradations. I got 'critically endangered/extinct in the wild' on my exam, although the curve bumped it all the way up to 'venti.'",
        image_url: "https://imgs.xkcd.com/comics/universal_rating_scale.png"
    },
    {
        name: "xkcd.com",
        title: "Space Basketball",
        comic_url: "https://xkcd.com/2328/",
        description: "My shooting will improve over the short term, but over the long term the universe will take more shots.",
        image_url: "https://imgs.xkcd.com/comics/space_basketball.png"
    }];

    return comics;
}

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comics: get_comics(),
            displayImage: false,
            openedComic: null
        }
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