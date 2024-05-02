import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { AppQueryClient } from './configs/reactQuery/index.ts'
import { VenueProvider } from './contexts/venue/provider.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={AppQueryClient}>
      <VenueProvider>
        <App />
      </VenueProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
