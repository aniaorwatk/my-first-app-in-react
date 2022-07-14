import React, { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './Sidebar2.css';

const Sidebar: React.FC = () => {
    const title: string = 'Give a smile to shiba';
    const subtitle: string = 'We prepared cute shiba images to make your day better';
    const sidebarButton: string = 'Get new shiba image';

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
                    {title}
                </Typography>
                <Typography className="sidebar--typography" variant="h5" gutterBottom component="div">
                    {subtitle}
                </Typography>
                <img className="sidebar--img" src={imageShiba} />
                <button onClick={getShibaImg} data-testid="get-shiba" className="sidebar--button">{sidebarButton.toUpperCase()}</button>
            </Box>
        </>
    )
}

export default Sidebar
