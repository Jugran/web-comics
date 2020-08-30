
import React, { Component } from 'react'
import { connect } from 'react-redux'

import ComicList from './ComicList'
import TopNavbar from './TopNavbar'
import ImageModal from './ImageModal'
import Footer from './Footer'

import { fetchComics } from '../../actions/feed'


class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayImage: false,
            openedComic: null
        }   
    }

    componentDidMount(){
        this.props.fetchComics();
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

        const comics = this.props.comics;

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
                            
                            { comics.length > 0 ? <ComicList comics={comics} openModal={this.openModal} /> : ('Loading ...') }

                            {/* <div className="container mx-auto text-center">
                                <button className="btn btn-warning">Load More</button>
                            </div> */}
                        </div>
                    </div>
                    <Footer />
                </div>
                {modalImage}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        comics: state.feed.comics,
        is_authenticated: state.auth.is_authenticated
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchComics: () => fetchComics(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);