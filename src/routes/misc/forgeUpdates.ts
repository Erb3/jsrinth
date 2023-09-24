import axios, { AxiosError, AxiosResponse } from "axios";
import { ModrinthAPI } from "../../ModrinthAPI";

interface forgeUpdatesResponse {
  homepage: string;
  recommended: { [minecraftVersion: string]: string };
  latest: { [minecraftVersion: string]: string };
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
        const recommended: { [minecraftVersion: string]: string } = {};
        const latest: { [minecraftVersion: string]: string } = {};

        for (const key in data.promos) {
          if (key.endsWith("-recommended"))
            recommended[key.replace("-recommended", "")] = data.promos[key];
          else if (key.endsWith("-latest"))
            latest[key.replace("-latest", "")] = data.promos[key];
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
