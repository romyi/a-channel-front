import React from 'react'
import { useFormContext } from 'react-hook-form'

const LastNameInput = (props) => {
  const {register, addField} = useFormContext()
  React.useEffect(() => {
    addField({lastname: '2323'})
  }, [])
  return (
    <div>
        <input style={{backgroundColor: 'teal'}} {...register("lastname")} {...props} />
    </div>
  )
}

export default LastNameInput