import React from 'react';
import { Box, Typography } from '@mui/material';
import labels from '../../labels';
import './Header.css';

const Header = () => {
  return (
    <>
      <Box className="header--box" >
        <Typography variant="h4" gutterBottom component="div">
          {labels.header.title}
        </ Typography>
        <Typography variant="h5" gutterBottom component="div">
          {labels.header.subtitle}
        </ Typography>
      </Box>
    </>
  )
}

export default Header
