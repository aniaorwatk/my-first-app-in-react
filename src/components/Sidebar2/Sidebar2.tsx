import React, {FC} from 'react'
import './Sidebar2.css'
import {Box, Typography} from '@mui/material';

interface ImgShiba{
    img: string;
    url: string;
}

const Sidebar: React.FC = () => {
    const title: string = 'Give a smile to shiba'
    const subtitle: string = 'We prepared cute shiba images to make your day better'



const[imageShiba, setImageShiba ]= React.useState < number | null > (0)

    React.useEffect(function () {
        
        fetch("http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]")
            .then(res => res.json())
            .then(data => setImageShiba(data.url))
            .catch(err => console.log("error")
            )
         
    }, [imageShiba])  

    const getShibaImg = () => {
        console.log("photo")
    }

    return(
        <>
        <Box className= "header--box" >
        <Typography variant= "h4" gutterBottom component= "div">
        {title}
        </Typography> 
        <Typography variant= "h5" gutterBottom component= "div">
        {subtitle}
        </Typography>
        <button onClick={getShibaImg} className="sidebar--button"> Get new shiba image </button>
   
        </Box>
        </>
    )
}
export default Sidebar