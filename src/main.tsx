import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { AppQueryClient } from './configs/reactQuery/index.ts'
import { VenueProvider } from './contexts/venue/provider.tsx'

import './configs/i18n'
import './index.css'
import { I18nProvider } from './contexts/i18n/provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={AppQueryClient}>
      <VenueProvider>
        <I18nProvider>
          <App />
        </I18nProvider>
      </VenueProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
