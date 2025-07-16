import { useQuery } from "@tanstack/react-query";
import { fetchData } from './fetchdata';

export const useRound = ({
  round,
  leagueId,
}: {
  round: number;
  leagueId: number;
}) => {
  return useQuery({
    queryKey: ["round", { round, leagueId }],
    queryFn: () => getRound({ round, leagueId }),
  });
};

const getRound = async ({
  round,
  leagueId,
}: {
  round: number;
  leagueId: number;
}) => {
  let url = `https://app.seker.live/fm1/round/${leagueId}/${round}`;

  return fetchData(url);
};
