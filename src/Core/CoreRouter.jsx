import React from 'react'
import { Route } from 'wouter'
import { useBlockListQuery } from '../acess-api-app'
import useMeta from './meta'
import RuntimeBlockLoader from './RuntimeBlockLoader'

// Работет со структурой типа BlocksGroupedUnderRoute, разбитой
// по парам key-value см. meta.ts
// Рисует главный роутер, аранжирующий блоки. Больше роутеров
// на уровне всего приложения нет, саброутинг отдается блокам,
// здесь не успел реализовать, но задумка такая была

// фолбека c редиректом тут нет, но разумеется будет
const CoreRouter = () => {
  const {data, isLoading} = useBlockListQuery()
  const { routeentries } = useMeta(data)
  if (isLoading) return null;
  if (routeentries) {
    return (
    <div>
      {routeentries.map(([path, blocks]) => {
        if (path === '/*') {
           return <RuntimeBlockLoader key={'blocks-hosted-above-all-routes'} blocks={blocks}/>
        } else {
        return (
          <Route key={path} path={path}>
            <RuntimeBlockLoader key={'blocks-hosted-on-the-particular-route'} blocks={blocks}/>
          </Route>
        )}
      })}
      </div>
  )
  } 
}

export default CoreRouter