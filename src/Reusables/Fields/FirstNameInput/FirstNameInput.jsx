import React from 'react'
import { useFormContext } from 'react-hook-form'

const name = 'firstname'

const FirstNameInput = (props) => {
  const {register, addField} = useFormContext()
  React.useEffect(() => {
    addField({[name]: 'wef'})
  }, [])
  return (
    <div>
        <input style={{backgroundColor: 'snow'}} {...register(name)} {...props} />
    </div>
  )
}

export default FirstNameInput