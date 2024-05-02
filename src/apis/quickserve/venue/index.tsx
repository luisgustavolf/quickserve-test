import { QuickServeApi } from ".."
import { Venue } from "./venue"

export async function getVenue() {
  const url = '/venue/9'
  return await QuickServeApi.get<Venue>(url)
} 