import react, {FC} from 'react';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import './Header.css'

const Header: FC = () => {
  const title: string = 'Meet ReqRes users!'
  const subtitle: string = 'Application created with free ReqRes API'

    return(
        <Container>
            <Box className="header--box" >
            <h1>{title}</h1>
            <Typography variant="h5" gutterBottom component="div">
           {subtitle}
            </Typography>
            </Box>
        </Container>
  )
}

export default Header
