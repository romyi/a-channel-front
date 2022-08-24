import React from 'react'

import { queryClient, QueryClientProvider } from './acess-api-app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import CoreNavigation from './Core/CoreNavigation';
import CoreRouter from './Core/CoreRouter';

import './App.css'


// Общая сетка для navigation и контента будет рисоваться здесь.
// Тут оболочки нет, лежит в потоке документа как есть
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
      <CoreNavigation />
      <CoreRouter />
    </QueryClientProvider>
  )
}

export default App
