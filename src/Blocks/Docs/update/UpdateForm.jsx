import React from 'react'
import { useForm } from 'react-hook-form'
import {nanoid} from 'nanoid'
import FirstNameInput from '../../../Reusables/FirstNameInput';

const UpdateForm = ({submitFunction}) => {
    const {register, handleSubmit, formState: { errors }} = useForm({mode: 'onBlur',resolver: async (values) => {
       return {values: values ?? {}, errors: values.title.length < 2 ? { title: {type: 'format', message: 'wrong'} } : {}} 
    }});
    const onSubmit = (data) => {
        submitFunction({...data, id: nanoid()})  
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FirstNameInput name="title" placeholder="doc" register={register("title")} error={errors?.title} />
        <button type="submit">добавить</button>
    </form>
    )
}

export default UpdateForm