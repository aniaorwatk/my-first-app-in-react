import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { CardActions, CardContent, CardMedia, Button, Typography, Card } from '@mui/material';

interface Person {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  id: number;
}

const CardPerson = () => {
  const [dataUsers, setDataUsers] = useState<Person[]>([])
  const [totalPages, setTolatPages] = useState(1)
  const [numberPage, setNumberPage] = useState(1)

  useEffect(() => {
    const apiUser = async () => {
      const URL = `https://reqres.in/api/users?page=${numberPage}`;
      const res = await fetch(URL)
      const json = await res.json()

      if (!(res.status === 200)) {
        const msg = `Users not found: ${res.status}`
        throw alert(msg)
      }

      setDataUsers(json.data)
      setTolatPages(json.total_pages)
      setNumberPage(json.page)
    };
    apiUser()
  }, [numberPage]);

  const learnMore = "Learn more";
  const add = numberPage + 1;
  const subtract = numberPage - 1;
  const changePage = () => (numberPage < totalPages ? setNumberPage(add) : setNumberPage(subtract))

  const [query, setQuery] = useState<string>('')
  const searchName: string = "Find User: ";

  const searchPeople = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <section className="userList">
      <form className="form">
        <label className="label" htmlFor="query">{searchName}</label>
        <input className="input"
          type="text"
          name="query"
          placeholder="write search user"
          value={query}
          onChange={searchPeople}
        />
      </form>
      <div className="user">
        {dataUsers.length &&
          dataUsers.filter((val) => {
            if (!query || val.email.toLowerCase().includes(query.toLowerCase()) || val.first_name.toLowerCase().includes(query.toLowerCase())) {
              return val
            } 
          }).map((user) => {
            return (
              <div key={user.id} className="listItem--card">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="Photo User"
                    height="180"
                    key={user.avatar}
                    image={user.avatar}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {user.first_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button className="userList--lernMore" size="small">{learnMore}</Button>
                  </CardActions>
                </Card>
              </div>
            )
          })
        }
      </div>
      <button className="listItem--button" onClick={changePage}>Change Page</button>
    </section>
  )
}

export default CardPerson;


// if (query == "") {
//   return val
// } else if (val.email.toLowerCase().includes(query.toLowerCase()) || val.first_name.toLowerCase().includes(query.toLowerCase())) {
//   return val
// }