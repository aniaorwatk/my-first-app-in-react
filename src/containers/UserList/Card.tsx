import react, {FC} from 'react'
import './UserList.css'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import React from 'react'

interface Person {
    name: string;
    email: string;
    avatar: string;
  }

const Card:React.FC<Person> = (props) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                secondary={
                    <React.Fragment>
                    <Typography
                    sx={{ display: 'inline' }}
                     component="span"
                     variant="body2"     
                    >
                        {props.name}
                    </Typography>
                    <Typography>
                        {props.email}
                    </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}

export default Card
