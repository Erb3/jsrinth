export class ModrinthError extends Error {
  constructor(
    public error: string,
    public serverMessage?: string,
    public parameter?: string
  ) {
    super(serverMessage ?? error);
  }
}
