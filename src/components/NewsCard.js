import React, { Component } from 'react'

import './NewsCard.css'

class NewsCard extends Component {

    render() {

        const { title, text, picture } = this.props

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image news-img-container">
                    <img alt="" className="news-img" src={ picture } />
                    <span className="card-title">
                        { title }
                    </span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="news-data">
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ text }</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewsCard