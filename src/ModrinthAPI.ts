import { forgeUpdates } from "./routes/misc/forgeUpdates";
import { statistics } from "./routes/misc/statistics";
import { search } from "./routes/projects/searchProjects";
import { type UserAgentData, generateUserAgent } from "./utils";

interface ModrinthAPIOptions {
  apiURL?: string;
  userAgent: UserAgentData | string;
}

class ModrinthAPI {
  baseURL: string;
  userAgent: string;

  constructor(options: ModrinthAPIOptions) {
    this.baseURL = options?.apiURL || "https://api.modrinth.com/v2/";

    if (typeof options.userAgent === "string") {
      this.userAgent = options.userAgent;
    } else {
      this.userAgent = generateUserAgent(options.userAgent);
    }
  }

  async _request<T extends Record<string, any>>(
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    endpoint: string,
    opts?: {
      query?: URLSearchParams;
      base?: string;
    }
  ) {
    const queryStr = opts?.query ? "?" + opts.query.toString() : "";
    const url = new URL(endpoint + queryStr, opts?.base || this.baseURL);

    const res = await fetch(url.toString(), {
      method,
      headers: {
        "User-Agent": this.userAgent,
        "Library-Agent": "jsrinth",
        Accept: "application/json",
      },
    });
    const data: T = await res.json();
    return data;
  }

  public forgeUpdates = forgeUpdates;
  public statistics = statistics;
  public search = search;
}

export { ModrinthAPI, type ModrinthAPIOptions };
