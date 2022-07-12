import React, { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './Sidebar2.css';

const Sidebar: React.FC = () => {
    const title: string = 'Give a smile to shiba';
    const subtitle: string = 'We prepared cute shiba images to make your day better';
    const sidebarButton: string ='Get new shiba image';
    
    const [imageShiba, setImageShiba] = useState('')

    const apiShiba = async () => {
        const URL = `http://shibe.online/api/shibes`;
        const res = await fetch(URL)
        const json = await res.json()

          if (!(res.status === 200)) {
            const msg = `Shiba not found: ${res.status}`
            throw alert(msg)
          }
        setImageShiba(json)
    }
    
    useEffect(() => {
        apiShiba()
    }, []);

    const getShibaImg = () => {
        apiShiba()
    }

    return (
        <>
            <Box className="header--box" >
                <Typography variant="h4" gutterBottom component="div">
                    {title}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    {subtitle}
                </Typography>
                <button onClick={getShibaImg} className="sidebar--button"> {sidebarButton} </button>
                <img src={imageShiba} />
            </Box>
        </>
    )
}

export default Sidebar
