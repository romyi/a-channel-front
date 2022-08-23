import React from 'react'
import { usePayoutQuery } from '../../../acess-api-app'
import { Appearance } from './PayoutWidget.emotion'

const PayoutWidget = () => {
  const {data, isLoading} = usePayoutQuery(true);
  if (isLoading) return <Appearance/>
  if (data) return (
    <Appearance>{data.map(pay => <h2 key={pay.id}>{pay.amount}</h2>)}</Appearance>
  )
  
}

export default PayoutWidget