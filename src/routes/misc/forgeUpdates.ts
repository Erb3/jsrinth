import { ModrinthAPI } from "../../ModrinthAPI";

export interface forgeUpdatesResponse {
  homepage: string;
  recommended: Map<string, string>;
  latest: Map<string, string>;
  ok: boolean;
  error?: string;
}

export async function getForgeUpdates(
  parent: ModrinthAPI,
  projectID: string
): Promise<forgeUpdatesResponse> {
  return new Promise((accept, reject) => {
    fetch(
      `${parent.baseURL.replace(
        "/v2",
        ""
      )}/updates/${projectID}/forge_updates.json`
    )
      .then(async (result) => {
        const data = await result.json();
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
      .catch((error) => {
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
