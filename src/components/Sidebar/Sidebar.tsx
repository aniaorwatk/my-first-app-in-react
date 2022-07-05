import react, {FC} from "react"
import './Sidebar.css'
import {Box, Typography} from '@mui/material';
import React from "react";



const Sidebar: React.FC = () => {
    const title: string = 'Give a smile to shiba'
  const subtitle: string = 'We prepared cute shiba images to make your day better'

const[imageShiba, setImageShiba]= React.useState < number | null > (0)
React.useEffect(function() {
    console.log("Effect ran")
    fetch("http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]")
        .then(res => res.json())
        .then(data => setImageShiba(data))
}, [imageShiba])  






    return(
        <>
        <Box className= "header--box" >
        <Typography variant= "h4" gutterBottom component= "div">
        {title}
        </Typography> 
        <Typography variant= "h5" gutterBottom component= "div">
        {subtitle}
        </Typography>
        <button> "Get new shiba image" </button>
        </Box>
      </>
    )
}

export default Sidebar
