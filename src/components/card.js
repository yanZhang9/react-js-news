import React, { Component } from 'react';

let backdropIMG;

class Card extends Component {

    render() {
        let data = this.props.data
        // if movie ID found, then...
        let
            totalRevenue = data.revenue,
            noData = '-';
        backdropIMG = 'https://image.tmdb.org/t/p/original' + data.backdrop;

        // conditional statements for no data
        if ( data.vote === 'undefined' || data.vote === 0 ) {
            data.vote = noData
        }
        else {
            data.vote = data.vote + '/ 10'
        };

        if ( totalRevenue === 'undefined' || totalRevenue === 0 ) {
            totalRevenue = noData
        };

        return (
            <div className="col-xs-12 cardcont nopadding">
                <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
                    <h1>{ data.original_title }</h1>
                    <span className="tagline">{ data.tagline }</span>
                    <p>{ data.overview }</p>
                    <div className="additional-details">
                        <div className="row nopadding release-details">
                            <div className="col-xs-6"> Original Release: <span className="meta-data" >{ data.release }</span></div>
                            <div className="col-xs-6"> Running Time: <span className="meta-data">{ data.runtime } mins</span> </div>
                            <div className="col-xs-6"> Box Office: <span className="meta-data">{ totalRevenue }</span></div>
                            <div className="col-xs-6"> Vote Average: <span className="meta-data">{ data.vote }</span></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    componentDidUpdate() {
        document.body.style.backgroundImage = 'url(' + backdropIMG + ')';
    }
};


module.exports = Card;

