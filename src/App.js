import React, { Component } from 'react';
import SearchBox from './components/search';
import Card from './components/card';


class App extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            movieID: 118340 //  set initital load movie - Les Gardiens de la Galaxie
        }
    }


    render() {
        return (
            <div>
                <SearchBox fetchMovieID={ this.fetchMovieID.bind( this ) } />
                <Card data={ this.state } />

            </div> )

    } // END render



    // the api request function
    fetchApi( url ) {

        fetch( url ).then(( res ) => res.json() ).then(( data ) => {
            // update state with API data
            this.setState( {
                movieID: data.id,
                original_title: data.original_title,
                tagline: data.tagline,
                overview: data.overview,
                homepage: data.homepage,
                production: data.production_companies,
                production_countries: data.production_countries,
                genre: data.genres,
                release: data.release_date,
                vote: data.vote_average,
                runtime: data.runtime,
                revenue: data.revenue,
                backdrop: data.backdrop_path

            } )
        } )


    } // end function

    fetchMovieID( movieID ) {
        let url = `https://api.themoviedb.org/3/movie/${ movieID }?&api_key=c65fba81d10cadd467342db86fd033d6`
        this.fetchApi( url )
    } // end function

    componentDidMount() {
        let url = `https://api.themoviedb.org/3/movie/${ this.state.movieID }?&api_key=c65fba81d10cadd467342db86fd033d6`
        this.fetchApi( url )

    }



    /* displayMovie( movies ) {
 
         if ( this.state.movieID ) {
             const movies = this.state.movieID.data.results
 
             return movies.map(
                 movies.results, function ( movie ) {
                     // Map the remote source JSON array to a JavaScript object array
                     return {
 
                         value: movie.original_title, // search original title
                         id: movie.id // get ID of movie simultaniously
                     };
                 } );
 
 
 
             return null
         }
 
         // end component did mount function
     }
 */
}   // END CLASS - APP

module.exports = App;






























