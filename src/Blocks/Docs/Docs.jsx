import React from 'react'
import { useDocsMutation } from '../../acess-api-app'
import { useDocsQuery } from '../../acess-api-app'

const Docs = ({interfaces}) => {
  const updateDocImplementation = interfaces?.includes('update-doc')
  const viewDocImplementation = interfaces?.includes('view-doc')
  const { data } = useDocsQuery(viewDocImplementation)
  const { mutate } = useDocsMutation();
  return (
    <div>
      {viewDocImplementation && data && data.map(doc => <div key={doc.id}>{doc.title}</div>)}
      {updateDocImplementation && <button onClick={() => mutate({id: '5', title: 'new doc'})}>add doc</button>}
    </div>
  )
}

export default Docs