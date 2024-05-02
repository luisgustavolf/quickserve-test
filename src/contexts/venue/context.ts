import { createContext } from "react";
import { VenueContextValues } from "./venueContextValues";

export const VenueContext = createContext<VenueContextValues>({
  venue: undefined,
  loading: false
})