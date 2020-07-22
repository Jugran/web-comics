
import React, {Component} from 'react';


function makeCards(comic){
    return (
        <div className="card-columns">
            <div id="comics-thumbnail" className="card" key={Math.floor(Math.random() * 101)}>
                <img src={comic.image_url} alt={comic.description} id={comic.id} className="card-img-top" />

                <div class="card-body">
                    <h3 class="card-title">{ comic.title }</h3>
                    <p class="card-text">{ comic.description }</p>
                </div>
            </div>
        </div>
    );
}

class Loader extends Component{
    constructor(props){
        super(props)
        this.state = {
            comics: [{
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
            }]
        };
    }

    render(){
        const comics = this.state.comics;

        const ComicGrid = comics.map((comic) => {
            return makeCards(comic);
        });

        return (
            <div className="container mx-auto p-3">
                { ComicGrid }  
            </div>
        );
    };

}

export default Loader;