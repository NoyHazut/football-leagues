import { useQuery } from "@tanstack/react-query";
import { fetchData } from './fetchdata';

export const useLeagueHistory = (leagueId: number) => {
  return useQuery({
    queryKey: ["leagueHistory", { leagueId }],
    queryFn: () => getLeagueHistory({ leagueId }),
  });
};

const getLeagueHistory = async ({ leagueId }: { leagueId: number }) => {
  let url = `https://app.seker.live/fm1/history/${leagueId}`;

  return fetchData(url);
};
