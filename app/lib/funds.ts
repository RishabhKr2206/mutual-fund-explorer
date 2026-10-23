import fundsData from "../data/dummy-data.json";
import type { Fund } from "../types/fund";

const funds = fundsData as Fund[];

export function getFunds(): Fund[] {
  return funds;
}
