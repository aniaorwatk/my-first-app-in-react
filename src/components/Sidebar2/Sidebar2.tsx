import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import labels from '../../labels';
import './Sidebar2.css';

const Sidebar = () => {
    
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
            <Box className="sidebar--box" >
                <Typography className="sidebar--typography" variant="h4" gutterBottom component="div">
                    {labels.sidebar.title}
                </Typography>
                <Typography className="sidebar--typography" variant="h5" gutterBottom component="div">
                    {labels.sidebar.subtitle}
                </Typography>
                <img className="sidebar--img" src={imageShiba} />
                <button onClick={getShibaImg} data-testid="get-shiba" className="sidebar--button">{labels.sidebar.sidebarButton.toUpperCase()}</button>
            </Box>
        </>
    )
}

export default Sidebar
