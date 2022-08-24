import React from 'react'
import { useForm } from 'react-hook-form'
import {nanoid} from 'nanoid'

const UpdateForm = ({submitFunction}) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log({...data, id: nanoid()})
        submitFunction({...data, id: nanoid()})  
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='document' {...register("title", {required: true})}/>
        <button type="submit">добавить</button>
    </form>
    )
}

export default UpdateForm