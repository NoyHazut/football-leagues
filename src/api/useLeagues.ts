import { useQuery } from "@tanstack/react-query";
import { fetchData } from './fetchdata';


export const useLeagues = () => {
  return useQuery({
    queryKey: ["leagues"],
    queryFn: () => getLeagues({}),
  });
};

const getLeagues = async ({ }: {}) => {
  let url = `https://app.seker.live/fm1/leagues`;
  return fetchData(url);
};