import React from 'react'
import ActivityWidget from './ActivityWidget';
import MonthMarginWidget from './MonthMarginWidget';
import PayoutWidget from './PayoutWidget'
import { DashedCont } from './Widgets.emotion'

const Widgets = ({interfaces}) => {
  const implViewPayout = interfaces?.includes('view-payout');
  const implViewActivity = interfaces?.includes('view-activity');
  return (
    <DashedCont>
      {implViewPayout && <PayoutWidget />}
      {implViewPayout && <MonthMarginWidget />}
      {implViewActivity && <ActivityWidget />}
    </DashedCont>
  )
}

export default Widgets