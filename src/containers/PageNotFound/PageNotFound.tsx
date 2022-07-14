import React,{FC} from 'react'

const PageNotFound = () => {
    const infNotFound: string = "This page could not be found";
    const imageNotFound : string ="https://i.imgur.com/qIufhof.png";
    return (
        <div id="wrapper">
            <img src={imageNotFound} />
            <div id="info">
                <h3>{infNotFound}</h3>
            </div>
        </div >
    )
}

export default PageNotFound