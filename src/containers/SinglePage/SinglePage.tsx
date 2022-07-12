import React, { FC, useState, useEffect } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import './SinglePage.css'
import { useParams } from 'react-router-dom';
import {Person} from '../UserList/CardPerson'

interface FormValues {
    title: string;
    mes: string;
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: !values.title ? {} : values,
        errors: !values.title
            ? {
                title: {
                    type: "required",
                    message: "This is required."
                }
            }
            : {}
    };
};

function SinglePage() {

    const para = useParams()
    const [dataUsers, setDataUsers] = useState<Person[]>([])
    useEffect(() => {
        const apiUser = async () => {
          const URL = `https://reqres.in/api/users/${para.id}`;
          const res = await fetch(URL)
          const json = await res.json()
    
          if (!(res.status === 200)) {
            const msg = `Users not found: ${res.status}`
            throw alert(msg)
          }
    
          setDataUsers(json.data)
          
        };
        apiUser()
      }, [para]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: resolver
    });

    const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));
    const title: string = "Title message";
    const messagetoUser: string = "Write a message to the";
    const message: string = "Your message";

    return (
       
        <div className="App">
            <h1 className="h1--form"> {messagetoUser} </h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label className="label--singelPage">{title}</label>
                    <input {...register("title")} placeholder="Title..." />
                    {errors?.title && <p>{errors.title.message}</p>}
                </div>
                <div>
                    <label className="label--singelPage" >{message}</label>
                    <textarea {...register("mes")} placeholder="Message..." />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}

export default SinglePage
