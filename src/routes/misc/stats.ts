import axios, { AxiosError, AxiosResponse } from "axios";
import { ModrinthAPI } from "../../ModrinthAPI";

interface nodeStatsResponse {
  projects: number,
  versions: number,
  files: number,
  authors: number,
  ok?: boolean;
  error?: string;
}

async function getNodeStats(parent: ModrinthAPI): Promise<nodeStatsResponse> {
  return new Promise((accept, reject) => {
    axios.get(parent.apiURL + "no-statistics").then((result: AxiosResponse) => {
      const data: nodeStatsResponse = result.data;

      accept({
        authors: data.authors,
        files: data.files,
        projects: data.projects,
        versions: data.versions,
        ok: true
      });
    }).catch((error: AxiosError) => {
      reject({
        authors: -1,
        files: -1,
        projects: -1,
        versions: -1,
        ok: false,
        error: error.message
      });
    });
  });
}

export { getNodeStats, nodeStatsResponse };