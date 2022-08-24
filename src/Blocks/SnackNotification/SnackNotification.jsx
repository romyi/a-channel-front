import React from 'react'
import { useDocsMutation, useDocsQuery, useIsMutationSuccessful } from '../../acess-api-app'
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
    const enableDocNotification = interfaces?.includes('update-doc')
    // подписка на успешный статус mutatuin, вызванной в другом месте приложения
    // как это из коробки работает с useQuery по queryKey
    const docUploaded = useIsMutationSuccessful('update-doc')
    const { data } = useDocsQuery(false)
    const newlyUploadedDoc = data?.at(-1).title
    if (docUploaded && enableDocNotification) return <DocNotification title={newlyUploadedDoc} />
}

export default SnackNotification