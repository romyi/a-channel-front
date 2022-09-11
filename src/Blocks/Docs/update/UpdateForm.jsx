import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import {nanoid} from 'nanoid'
import { FirstNameInput, LastNameInput, Third } from '../../../Reusables/Fields';
import { useDynamicSchema } from '../../../Reusables/Hooks';

const UpdateForm = ({submitFunction}) => {
    const methods = useForm();
    const onSubmit = (data) => {
        submitFunction({...data, id: nanoid()})  
    }
    const {schema, addField} = useDynamicSchema();
    return (
    <FormProvider {...methods} addField={addField}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FirstNameInput placeholder="doc" />
            <LastNameInput placeholder="last" />
            <Third placeholder="third" />
            <button type="submit">добавить</button>
        </form>
    </FormProvider>
    )
}

export default UpdateForm