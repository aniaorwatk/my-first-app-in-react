import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardActions, CardContent, CardMedia, Button, Typography, Card } from '@mui/material';
import './UserList.css'

export interface Person {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  id: number;
}

const CardPerson = () => {
const avatarNo: string ='https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png';
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

  const learnMore = "Send Message";
  const add = numberPage + 1;
  const subtract = numberPage - 1;
  const changePage = () => (numberPage < totalPages ? setNumberPage(add) : setNumberPage(subtract))

  const [query, setQuery] = useState<string>('')
  const searchName: string = "Find User: ";
  const change: string = "Change Page";

  const searchPeople = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <section className="userList">
      <form className="form--card">
        <label className="label--card" htmlFor="query">{searchName}</label>
        <input className="input--card"
          type="text"
          name="query"
          placeholder="search ..."
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
                  { !user.avatar  && <CardMedia
                    component="img"
                    alt="No Photo"
                    height="180"
                    key={user.avatar}
                    image={avatarNo}
                  />}
                 {user.avatar && <CardMedia
                    component="img"
                    alt="Photo User"
                    height="180"
                    key={user.avatar}
                    image={user.avatar}
                  />}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {user.first_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/${user.id}`}>
                      <Button className="userList--lernMore" size="small">
                        {learnMore.toUpperCase()}
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </div>
            )
          })
        }
      </div>
      <button className="listItem--button" onClick={changePage}>{change.toUpperCase()}</button>
    </section>
  )
}

export default CardPerson;
