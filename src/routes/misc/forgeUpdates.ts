import axios, { AxiosError, AxiosResponse } from "axios";
import { ModrinthAPI } from "../../ModrinthAPI";

interface forgeUpdatesResponse {
  homepage: string;
  recommended: Map<string, string>;
  latest: Map<string, string>;
  ok: boolean;
  error?: string;
}

async function getForgeUpdates(
  parent: ModrinthAPI,
  projectID: string
): Promise<forgeUpdatesResponse> {
  return new Promise((accept, reject) => {
    axios
      .get(
        `${parent.baseURL.replace(
          "/v2",
          ""
        )}/updates/${projectID}/forge_updates.json`
      )
      .then((result: AxiosResponse) => {
        const data = result.data;
        const recommended = new Map<string, string>();
        const latest = new Map<string, string>();

        for (const key in data.promos) {
          if (key.endsWith("-recommended")) {
            recommended.set(key.replace("-recommended", ""), data.promos[key]);
          } else if (key.endsWith("-latest")) {
            latest.set(key.replace("-latest", ""), data.promos[key]);
          }
        }

        accept({
          homepage: data.homepage,
          recommended,
          latest,
          ok: true,
        });
      })
      .catch((error: AxiosError) => {
        reject({
          homepage: "https://modrinth.com",
          recommended: {},
          latest: {},
          ok: false,
          error: error.message,
        });
      });
  });
}

export { getForgeUpdates, forgeUpdatesResponse };
