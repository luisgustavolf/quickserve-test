import { useQuery } from "@tanstack/react-query";
import { getVenue } from "../../../apis/quickserve/venue";

export function useVenueService() {
  const getQuery = useQuery({
    queryKey: ['venueContextList'],
    queryFn: async () => {
      return await getVenue()
    }
  })

  return {
    data: getQuery.data?.data,
    loading: getQuery.isFetching
  }
}