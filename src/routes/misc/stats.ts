import { ModrinthAPI } from "../../ModrinthAPI";

export interface nodeStatsResponse {
  authors: number;
  files: number;
  projects: number;
  versions: number;
  ok: boolean;
  error?: string;
}

export async function getNodeStats(
  parent: ModrinthAPI
): Promise<nodeStatsResponse> {
  return new Promise((accept, reject) => {
    fetch(parent.baseURL + "/statistics")
      .then(async (result) => {
        const data: nodeStatsResponse = await result.json();

        accept({
          authors: data.authors,
          files: data.files,
          projects: data.projects,
          versions: data.versions,
          ok: true,
        });
      })
      .catch((error) => {
        reject({
          authors: -1,
          files: -1,
          projects: -1,
          versions: -1,
          ok: false,
          error: error.message,
        });
      });
  });
}
