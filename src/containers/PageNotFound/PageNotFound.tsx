import React, { FC } from 'react'
import './PageNotFound.css'

const PageNotFound = () => {
    const infNotFound: string = "This page could not be found";
    const imageNotFound: string = "https://i.imgur.com/qIufhof.png";
    return (
        <div className="wrapper--page">
            <img src={imageNotFound} />
            <div>
                <h3>{infNotFound}</h3>
            </div>
        </div >
    )
}

export default PageNotFound
