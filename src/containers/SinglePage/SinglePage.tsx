import React, { useState, useEffect } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import labels from '../../labels';
import { Person } from '../UserList/CardPerson';
import './SinglePage.css';
interface FormValues {
    title: string;
    mes: string;
}

const resolver: Resolver<FormValues> = async (values) => {
    const typeTitle = "required";
    const messageTitle = "This is required.";
    return {
        values: !values.title ? {} : values,
        errors: !values.title
            ? {
                title: {
                    type: typeTitle,
                    message: messageTitle
                }
            }
            : {}
    };
};

const SinglePage = () => {

    const para = useParams()
    const [dataUser, setDataUser] = useState<Person>()
    useEffect(() => {
        const apiUser = async () => {
            const URL = `https://reqres.in/api/users/${para.id}`;
            const res = await fetch(URL)
            const json = await res.json()

            if (!(res.status === 200)) {
                const msg = `Users not found: ${res.status}`
                throw alert(msg)
            }
            setDataUser(json.data)
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
    
    return (
        <div className="singlePage--box">
            <div className="singlePage--cardUser">
                <p className="singlePage--name">{dataUser?.first_name} {dataUser?.last_name}</p>
                <img src={dataUser?.avatar} className="singlePage--image" />
            </div>
            <div className="App">
                <h1 className="h1--form"> {labels.singlePage.messagetoUser}{dataUser?.first_name} </h1>
                <form onSubmit={onSubmit}>
                    <div>
                        <label className="label--singelPage">{labels.singlePage.title}</label>
                        <input {...register("title")} placeholder={labels.singlePage.placeholderTitle} />
                        {errors?.title && <p>{errors.title.message}</p>}
                    </div>
                    <div>
                        <label className="label--singelPage" >{labels.singlePage.message}</label>
                        <textarea {...register("mes")} placeholder={labels.singlePage.placeholderMessage} />
                        {errors?.mes && <p>{errors.mes.message}</p>}
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}

export default SinglePage
