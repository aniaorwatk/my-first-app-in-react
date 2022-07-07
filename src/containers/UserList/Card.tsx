import React, {FC, useEffect,useState} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
interface Person {
  first_name: string;
  email: string;
  avatar: string;
  id: number;
}

const Card = () => {
  const [dataUsers, setDataUsers] = useState<Person[]>([])
  const [totalPages, setTolatPages] = useState(1)
  const [numberPage, setNumberPage] = useState(1)
  const URL =`https://reqres.in/api/users?page=${numberPage}`;
  const apiUser = async () => {
  const res = await fetch(URL)
  const json = await res.json()
  setDataUsers (json.data)
  setTolatPages (json.total_pages)
  setNumberPage (json.page)
  };
 
useEffect( () => {
  apiUser()
}, [numberPage]);

console.log(totalPages)

const changePage = () => (numberPage < totalPages ? setNumberPage(numberPage + 1) : setNumberPage(numberPage -1))

return (
  <>
   <ListItem>
     <div>
       {dataUsers.length &&
       dataUsers.map((user) => {
         return (
           <div key={user.id} className="listItem--card">
             <ListItemAvatar>
               <Avatar key={user.avatar} src={user.avatar}/>
             </ListItemAvatar>
             <ListItemText
               secondary={
                 <React.Fragment>
                   <Typography>
                     {user.first_name}
                   </Typography>
                   <Typography>
                    {user.email}
                   </Typography>
                 </React.Fragment>
               }
             /> 
           </div>
         )
       })}
     </div> 
   </ListItem>
   <button className="listItem--button" onClick={changePage}>Change Page</button>
  </>
)
}

export default Card;
