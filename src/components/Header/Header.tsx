import react, {FC} from 'react';
import {Box, Typography} from '@mui/material';
import './Header.css'

const Header: FC = () => {
  const title: string = 'Meet ReqRes users!'
  const subtitle: string = 'Application created with free ReqRes API'

    return(
      <>
        <Box className="header--box" >
        <Typography variant="h4" gutterBottom component="div">
        {title}
        </Typography> 
        <Typography variant="h5" gutterBottom component="div">
        {subtitle}
        </Typography>
        </Box>
      </>
  )
}

export default Header
