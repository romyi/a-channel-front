import React from 'react'
import { Link } from 'wouter'
import { useBlockListQuery } from '../acess-api-app'
import useMeta from './meta'

const CoreNavigation = () => {
  const {data, isLoading} = useBlockListQuery()
  const { linkitems } = useMeta(data)
  if (isLoading) return null
  if (linkitems) return (
    <nav>
        {linkitems.map(item => {
          return (
            <h3  key={item.link}>
            <Link href={item.link}>
              {item.text}
            </Link>
            </h3>
          )
        })}
    </nav>
  )
  
}

export default CoreNavigation