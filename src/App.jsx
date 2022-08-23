import React from 'react'

import { queryClient, QueryClientProvider } from './acess-api-app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import CoreNavigation from './Core/CoreNavigation';
import CoreRouter from './Core/CoreRouter';


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
