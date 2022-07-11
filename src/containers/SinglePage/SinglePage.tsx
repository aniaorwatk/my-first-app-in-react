import React, { FC, useState } from 'react';
import { useForm, Resolver } from "react-hook-form";
import './SinglePage.css'



interface FormValues {
    title: string;
    mes: string;
};

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
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: resolver
    });
    const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));
    const title: string = "Title message";
    const messagetoUser: string = "Write a message to the user";
    const message: string = "Your message"

    return (
        <div className="App">
            <h1 className="h1--form">{messagetoUser}</h1>
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
