interface ModrinthAPIOptions {
    apiURL?: string;
}

class ModrinthAPI {
  apiURL: string;

  constructor(options: ModrinthAPIOptions) {
    this.apiURL = options.apiURL || "https://api.modrinth.com/api/v2/";
  }
}

export { ModrinthAPI, ModrinthAPIOptions };