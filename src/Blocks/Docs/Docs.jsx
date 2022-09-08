import React from 'react'
import { useDocsMutation } from '../../acess-api-app'
import { useDocsQuery } from '../../acess-api-app'
import UpdateForm from './update/UpdateForm'

const Docs = ({interfaces}) => {
  const updateDocImplementation = interfaces?.includes('update-doc')
  const viewDocImplementation = interfaces?.includes('view-doc')
  const { data } = useDocsQuery(viewDocImplementation)
  const { mutate: mutateDocsList } = useDocsMutation();
  return (
    <div>
      {viewDocImplementation && data && data.map(doc => <div key={doc.id}>{doc.title}</div>)}
      {updateDocImplementation && <UpdateForm submitFunction={(newDoc) => mutateDocsList(newDoc)} />}
    </div>
  )
}

export default Docs