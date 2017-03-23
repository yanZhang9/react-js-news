import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */

/* MARVEL: https://newsapi.org/ */

export const API_KEY = 'c65fba81d10cadd467342db86fd033d6';
export const ts = new Date().getTime();
var crypto = require( 'crypto' );



export const hash = crypto.createHash( 'md5' ).update( ts + API_KEY ).digest( 'hex' );
export const ENDPOINTS = {


    // API_URL: "https://gateway.marvel.com:443/v1/public/characters?ts=" + ts + "&apikey=1ec2084de7f2c99a03f96fa6ba027965&hash=" + hash
    API_URL: "https://api.themoviedb.org/3/movie/550?api_key=c65fba81d10cadd467342db86fd033d6"
}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    } )
}