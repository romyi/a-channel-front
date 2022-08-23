import React from 'react'
import MonthMarginWidget from './MonthMarginWidget';
import PayoutWidget from './PayoutWidget'
import { DashedCont } from './Widgets.emotion'

const Widgets = ({interfaces}) => {
  const implViewPayout = interfaces?.includes('view-payout');
  return (
    <DashedCont>
      {implViewPayout && <PayoutWidget />}
      {implViewPayout && <MonthMarginWidget />}
    </DashedCont>
  )
}

export default Widgets