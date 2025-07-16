import { useQuery } from "@tanstack/react-query";
import { fetchData } from './fetchdata';

export const useTeams = (teamId: number) => {
  return useQuery({
    queryKey: ["teams", { teamId }],
    queryFn: () => getTeams({ teamId }),
  });
};

const getTeams = async ({ teamId }: { teamId: number }) => {
  let url = `https://app.seker.live/fm1/teams/${teamId}`;

  return fetchData(url);
};
