import React from 'react'
import { useDocsQuery, useIsMutationSuccessful } from '../../acess-api-app'
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

// SnackNotification довольно большая абстракция, если с mware
// будут переданы не 1 interface а 3, например update-doc,
// update-task, update-profile то SnackNotification здесь
// станет обширной фабрикой компонентов.
// На языке бизнеса: предусмотрены уведомления для добавления тасков,
// изменения профиля, документов. Разработчиков никто не ограничивает
// с точки зрения организаци кода, но абстракций, которые выставляются
// на уровень всей команды должно быть разумное количество
const SnackNotification = ({interfaces}) => {
    const enableDocNotification = interfaces?.includes('update-doc')
    // подписка на успешный статус mutatuin, вызванной в другом месте приложения
    // как это из коробки работает с useQuery по queryKey
    const docUploaded = useIsMutationSuccessful('add-new-doc')
    const { data } = useDocsQuery(enableDocNotification)
    const newlyUploadedDoc = data?.at(-1).title
    if (docUploaded && enableDocNotification) return <DocNotification title={newlyUploadedDoc} />
}

export default SnackNotification