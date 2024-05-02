import { ReactNode } from 'react'
import { VenueContext } from './context'
import { useVenueService } from './useVenueService/useVenueService'

export interface VenueProviderProps {
  children?: ReactNode
}

export function VenueProvider(props: VenueProviderProps) {
  const venueService = useVenueService()
  
  return (
    <VenueContext.Provider 
      value={{ 
        venue: venueService.data,
        loading: venueService.loading
      }}
    >
      {props.children}
    </VenueContext.Provider>
  )
}