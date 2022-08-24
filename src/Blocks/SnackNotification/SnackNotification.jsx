import React from 'react'
import { useDocsQuery } from '../../acess-api-app'
import { SnackbarCore } from './SnackNotification.emotion'

const SnackNotification = ({interfaces}) => {
    const enableDocNotification = interfaces?.includes('view-doc')
    const { isRefetching, isPreviousData } = useDocsQuery(enableDocNotification)
    console.log(isPreviousData)
    if (isRefetching && !isPreviousData && enableDocNotification) return <SnackbarCore>SnackNotification</SnackbarCore>
}

export default SnackNotification