import { getNodeStats } from "./routes/misc/stats";

interface ModrinthAPIOptions {
  apiURL?: string;
  userAgent?: string;
}

class ModrinthAPI {
  apiURL: string;
  userAgent: string;

  constructor(options?: ModrinthAPIOptions) {
    this.apiURL = options?.apiURL || "https://api.modrinth.com/v2/";
    this.userAgent = `${
      options?.userAgent || "Unidentified application"
    } powered by jsrinth`;
  }

  async getNodeStats() {
    return getNodeStats(this);
  }
}

export { ModrinthAPI, ModrinthAPIOptions };
