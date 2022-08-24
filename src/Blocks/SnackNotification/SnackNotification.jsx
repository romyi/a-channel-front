import React from 'react'
import { useDocsMutation, useDocsQuery } from '../../acess-api-app'
import { SnackbarCore } from './SnackNotification.emotion'

const DocNotification = ({title}) => {
    const [show, setshow] = React.useState(false)
    React.useEffect(() => {
        setshow(true)
      const ntfcTm = setTimeout(() => {
        setshow(false)
      }, 4000);
      return () => {
        clearTimeout(ntfcTm)
      }
    }, [])
    if (show) return <SnackbarCore>{title} добавлен</SnackbarCore>
}

const SnackNotification = ({interfaces}) => {
    const enableDocNotification = interfaces?.includes('view-doc')
    const { status } = useDocsMutation();
    console.log(status)
    const { isRefetching, data } = useDocsQuery(enableDocNotification)
    const newlyUploadedDoc = data?.at(-1).title
    if (isRefetching && enableDocNotification) return <DocNotification title={newlyUploadedDoc} />
}

export default SnackNotification