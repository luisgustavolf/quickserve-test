import { Venue } from "../../apis/quickserve/venue/venue";

export interface VenueContextValues {
  venue?: Venue
  loading: boolean
}