import { ModrinthAPI } from "../../ModrinthAPI";

export interface ModrinthStatistics {
  authors: number;
  files: number;
  projects: number;
  versions: number;
}

export async function statistics(
  this: ModrinthAPI
): Promise<ModrinthStatistics> {
  return this._request<ModrinthStatistics>("GET", "statistics");
}
