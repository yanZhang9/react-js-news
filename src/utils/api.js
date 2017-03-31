import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */

/*  https://newsapi.org/ */

export const API_KEY = 'c65fba81d10cadd467342db86fd033d6';
;

export const ENDPOINTS = {

    //API_URL: "https://api.themoviedb.org/3/movie/${movieID}?&api_key=c65fba81d10cadd467342db86fd033d6"
    API_URL: "https://api.themoviedb.org/3/search/movie?api_key={c65fba81d10cadd467342db86fd033d6}"

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


