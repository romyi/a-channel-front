import React from 'react'
import { Link } from 'wouter'
import { useBlockListQuery } from '../acess-api-app'
import useMeta from './meta'

// Компонент работает со структурой типа LinkItems см. meta.ts
// рисует линки для переходов по главному роуту
const CoreNavigation = () => {
  const {data, isLoading} = useBlockListQuery()
  const { linkitems } = useMeta(data)
  if (isLoading) return null
  if (linkitems) return (
    <nav>
        {linkitems.map(item => {
          return (
            <h3  key={item.link}>
            <Link style={{color: '#222222', textDecoration: 'none'}} href={item.link}>
              {item.text}
            </Link>
            </h3>
          )
        })}
    </nav>
  )
  
}

export default CoreNavigation