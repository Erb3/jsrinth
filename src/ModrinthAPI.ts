import {
  forgeUpdatesResponse,
  getForgeUpdates,
} from "./routes/misc/forgeUpdates";
import { getNodeStats } from "./routes/misc/stats";
import {
  SearchOptions,
  searchProjects,
} from "./routes/projects/searchProjects";
import { UserAgentData, generateUserAgent } from "./utils";

interface ModrinthAPIOptions {
  apiURL?: string;
  userAgent: UserAgentData | string;
}

class ModrinthAPI {
  baseURL: string;
  userAgent: string;

  constructor(options: ModrinthAPIOptions) {
    this.baseURL = options?.apiURL || "https://api.modrinth.com/v2";

    if (typeof options.userAgent === "string") {
      this.userAgent = options.userAgent;
    } else {
      this.userAgent = generateUserAgent(options.userAgent);
    }
  }

  async getForgeUpdates(projectID: string): Promise<forgeUpdatesResponse> {
    return getForgeUpdates(this, projectID);
  }

  async getNodeStats() {
    return getNodeStats(this);
  }

  async getTotalAuthors() {
    return (await this.getNodeStats()).authors;
  }

  async getTotalFiles() {
    return (await this.getNodeStats()).files;
  }

  async getTotalProjects() {
    return (await this.getNodeStats()).projects;
  }

  async getTotalVersions() {
    return (await this.getNodeStats()).versions;
  }

  async searchProjects(options: SearchOptions) {
    return searchProjects(this, options);
  }
}

export { ModrinthAPI, ModrinthAPIOptions };
