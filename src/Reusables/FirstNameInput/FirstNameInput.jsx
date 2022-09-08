import React from 'react'

const FirstNameInput = ({name, register, ...rest}) => {

  return (
    <div>
        {JSON.stringify(rest, 4, null)}
        <input style={{backgroundColor: 'cyan'}} {...register} {...rest}/>
        {rest.error && <aside>{rest.error?.message}</aside>}
    </div>
  )
}

export default FirstNameInput