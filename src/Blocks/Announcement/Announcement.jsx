import React from 'react'
import { usePayoutQuery } from '../../acess-api-app';
import { DashedCont } from './Announcement.emotion';

const Announcement = ({interfaces}) => {
  const enablePayoutImpl = interfaces?.includes('view-payouts');
  const {data} = usePayoutQuery(enablePayoutImpl);
  if (data) return (
    <DashedCont> 
      приветик, я закреплен вверху экрана вне зависимости от странички, последний payout был {data.at(-1).amount}
    </DashedCont>
  )
  
}

export default Announcement