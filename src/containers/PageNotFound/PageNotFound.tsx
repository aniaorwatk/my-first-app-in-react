import React from 'react'
import labels from '../../labels';
import './PageNotFound.css'

const PageNotFound = () => {
    const imageNotFound: string = "https://i.imgur.com/qIufhof.png";
    return (
        <div className="wrapper--pageNot">
            <img src={imageNotFound} className="wrapper--imgNot"/>
            <div>
                <h3>{labels.pageNotFound.infNotFound}</h3>
            </div>
        </div >
    )
}

export default PageNotFound
