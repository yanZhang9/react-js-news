/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import PersonnageCard from './components/PersonnageCard'

//import defaultPicture from './components/img/default.jpg'

const Materialize = window.Materialize

const APP_TITLE = 'Movie App'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS, API_KEY } from './utils/api'

//components
class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            movie: undefined,
            personnage: ''
        }
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{ APP_TITLE }</h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>

                <div className="App-Input-content">
                    <label style={ { fontSize: 22 } }>
                        Enter the name of artist:
                    </label>
                    <input type='text' style={ { paddingLeft: 20 } } value={ this.state.personnage } onChange={ this.handleChange } />
                </div>
                <div className="App-content">
                    <div className="center-align">

                        <form onSubmit={ this.fetchPersonnage }>
                            <button type="submit" className="waves-effect waves-light btn btn-search">
                                Search
                            </button>
                        </form>
                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        { this.displayMovie() }
                    </div>
                </div>
            </div>
        )
    }

    handleChange = ( event ) => {
        this.setState( {
            personnage: event.target.value
        } )
    }

    //method triggered by onSubmit event of the form or by onClick event of the "Get some marvel!" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchPersonnage = async ( event ) => {

        event.preventDefault()

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const movie = await get( ENDPOINTS.API_URL, {
                //YOU NEED TO PROVIDE YOUR "APIXU" API KEY HERE, see /utils/api.js file to grab the DOCUMENTATION file
                apikey: API_KEY,
                name: this.state.personnage
            } )

            console.log( movie )

            this.setState( {
                movie: movie
            } )

        }
        catch ( error ) {
            Materialize.toast( error, 8000, 'error-toast' )
            console.log( 'Failed fetching data: ', error )
        }

    }


    //handle display of the received marvel object
    displayMovie = () => {
        if ( this.state.movie ) {
            const characters = this.state.movie.data.results

            return characters.map(
                function ( character ) {
                    return <PersonnageCard key={ character.name }
                        title={ character.name }
                        text={ character.description }
                        urlImg={ character.thumbnail.path + "/portrait_xlarge." + character.thumbnail.extension }
                        url={ character.urls[ 0 ].url }



                    />
                }
            )
        }



        return null
    }

}

export default App
