import react, {FC} from 'react';
import './UserList.css';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';
// import dataCard from './dataCard'

interface Person {
    name: string;
    email: string;
    avatar: string;
}


const[dataPerson, setdataPerson ]= React.useState ([])

    React.useEffect(function () {
        fetch("https://reqres.in/api/")
            .then(res => res.json())
            .then(data => setdataPerson(data))
            .catch(err => console.log("error"))
    }, [2])

    setdataPerson

const Card: React.FC<Person> = (props) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="avatar" src={JSON.stringify(dataPerson)} />
            </ ListItemAvatar>
            <ListItemText
                secondary={
                    <React.Fragment>
                        <Typography>
                            {props.name}
                        </ Typography>
                        <Typography>
                            {props.email}
                        </ Typography>
                    </ React.Fragment>
                }
            />
        </ListItem>
    )
}

export default Card;
