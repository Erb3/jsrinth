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
