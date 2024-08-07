import type { ModrinthAPI } from "../../ModrinthAPI";

interface RawForgeUpdatesResponse {
  homepage: string;
  promos: { [key: string]: string };
}

export interface ForgeUpdatesResponse {
  homepage: string;
  recommended: Map<string, string>;
  latest: Map<string, string>;
}

async function getForgeUpdates(
  this: ModrinthAPI,
  projectID: string
): Promise<RawForgeUpdatesResponse> {
  return this._request<RawForgeUpdatesResponse>(
    "GET",
    `updates/${projectID}/forge_updates.json`,
    { base: "https://api.modrinth.com/" }
  );

  // Todo: handle errors, 400 possibly 404 too
}

export async function forgeUpdates(
  this: ModrinthAPI,
  projectID: string
): Promise<ForgeUpdatesResponse> {
  const res = await getForgeUpdates.bind(this)(projectID);
  const recommended = new Map<string, string>();
  const latest = new Map<string, string>();

  for (const key in res.promos) {
    if (key.endsWith("-recommended")) {
      recommended.set(key.replace("-recommended", ""), res.promos[key]);
    } else if (key.endsWith("-latest")) {
      latest.set(key.replace("-latest", ""), res.promos[key]);
    }
  }

  return {
    homepage: res.homepage,
    recommended,
    latest,
  };
}
