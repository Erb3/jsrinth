import {
  forgeUpdatesResponse,
  getForgeUpdates,
} from "./routes/misc/forgeUpdates";
import { getNodeStats } from "./routes/misc/stats";

interface ModrinthAPIOptions {
  apiURL?: string;
  userAgent?: string;
}

class ModrinthAPI {
  baseURL: string;
  userAgent: string;

  constructor(options?: ModrinthAPIOptions) {
    this.baseURL = options?.apiURL || "https://api.modrinth.com/v2";
    this.userAgent = `${
      options?.userAgent || "Unidentified application"
    } powered by JSRinth/1.0`;
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
}

export { ModrinthAPI, ModrinthAPIOptions };
