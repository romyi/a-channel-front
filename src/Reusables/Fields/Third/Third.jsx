import React from 'react'
import { useFormContext } from 'react-hook-form'

const Third = (props) => {
  const {register, addField} = useFormContext()
  React.useEffect(() => {
    addField({third: '000004'})
  }, [])
  return (
    <div>
        <input style={{backgroundColor: 'snow'}} {...register("third")} {...props} />
    </div>
  )
}

export default Third