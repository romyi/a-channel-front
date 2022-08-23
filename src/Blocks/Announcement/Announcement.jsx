import React from 'react'
import { usePayoutQuery } from '../../acess-api-app';
import { DashedCont } from './Announcement.emotion';

const Announcement = ({interfaces}) => {
  const enablePayoutImpl = interfaces?.includes('view-payouts');
  const {data} = usePayoutQuery(enablePayoutImpl);
  if (data) return (
    <DashedCont> 
      your last payout had amount of {data.at(-1).amount}
    </DashedCont>
  )
  
}

export default Announcement