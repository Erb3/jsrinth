import { getNodeStats } from "./routes/misc/stats";

interface ModrinthAPIOptions {
    apiURL?: string;
    useragent?: string;
}

class ModrinthAPI {
  apiURL: string;
  useragent: string;

  constructor(options?: ModrinthAPIOptions) {
    this.apiURL = options?.apiURL || "https://api.modrinth.com/api/v2/";
    this.useragent = `${options?.useragent || "Unidentified application"} powered by jsrinth`;
  }

  async getNodeStats() {
    return getNodeStats();
  }
}

export { ModrinthAPI, ModrinthAPIOptions };