import react, {FC} from 'react';
import './UserList.css';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';


interface Person {
    first_name: string;
    email: string;
    avatar: string;
}

const Card = (props:Person) => {
const[dataPerson, setdataPerson ]= React.useState<Person[]> ([])

    React.useEffect(function () {
        fetch("https://reqres.in/api/users?page=1")
            .then(res => res.json())
            .then(data => setdataPerson(data))
            .catch(err => console.log("error"))
            console.log(dataPerson)
    }, [])
console.log(dataPerson)
{dataPerson.length && dataPerson.map((person)=>{
    return (

        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="avatar" src={props.avatar} />
            </ ListItemAvatar>
            <ListItemText
                secondary={
                    <React.Fragment>
                        <Typography>
                            {props.first_name}
                        </ Typography>
                        <Typography>
                            {props.email}
                        </ Typography>
                    </ React.Fragment>
                }
            />
        </ListItem>
    )
            })}
}

export default Card;
