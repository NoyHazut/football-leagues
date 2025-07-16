import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { fetchData } from './fetchdata';

import type { SquadPlayer } from "@/types.ts";

export const useSquad = (
  {
    squadId,
    leagueId,
  }: {
    squadId: number | null;
    leagueId: number;
  },
  options?: Omit<
    UseQueryOptions<readonly SquadPlayer[]>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["squad", { squadId, leagueId }],
    queryFn: () => getSquad({ squadId, leagueId }),
    ...options,
  });
};

const getSquad = async ({
  squadId,
  leagueId,
}: {
  squadId: number | null;
  leagueId: number;
}): Promise<readonly SquadPlayer[]> => {
  if (squadId === null) {
    return [];
  }
  let url = `https://app.seker.live/fm1/squad/${leagueId}/${squadId}`;

  return fetchData(url);
};
