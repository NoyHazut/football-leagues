import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { fetchData } from './fetchdata';
import type { Match } from "@/types.ts";

export const useTeamHistory = (
  {
    teamId,
    leagueId,
  }: {
    teamId: number | null;
    leagueId: number;
  },
  options?: Omit<UseQueryOptions<readonly Match[]>, "queryKey" | "queryFn">
) => {
  return useQuery({
    queryKey: ["teamHistory", { teamId, leagueId }],
    queryFn: () => getTeamHistory({ teamId, leagueId }),
    ...options,
  });
};

const getTeamHistory = async ({
  teamId,
  leagueId,
}: {
  teamId: number | null;
  leagueId: number;
}): Promise<readonly Match[]> => {
  if (teamId === null) {
    return [];
  }
  let url = `https://app.seker.live/fm1/history/${leagueId}/${teamId}`;

  return fetchData(url);
};
