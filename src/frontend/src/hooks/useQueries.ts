import { createActor } from "@/backend";
import type { TraineeRecord } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

export type { TraineeRecord };

export function useSearchMarksheet(
  rollNumber: string,
  examSystem: string,
  annualYear: string,
  enabled: boolean,
) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<TraineeRecord[]>({
    queryKey: ["searchMarksheet", rollNumber, examSystem, annualYear],
    queryFn: async () => {
      if (!actor) return [];
      return actor.searchMarksheet(rollNumber, examSystem, annualYear);
    },
    enabled: !!actor && !isFetching && enabled,
  });
}

export function useGetAllTrainees() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<TraineeRecord[]>({
    queryKey: ["allTrainees"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTrainees();
    },
    enabled: !!actor && !isFetching,
  });
}
