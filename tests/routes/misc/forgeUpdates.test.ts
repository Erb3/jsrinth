import { ModrinthAPI } from "../../../src/ModrinthAPI";
const api = new ModrinthAPI({
  userAgent: "JSRinth unit tests",
});

test("Able to get forge updates for craftify (example)", async () => {
  const result = await api.getForgeUpdates("craftify");

  expect(result.ok).toBeTruthy();
  expect(result.error).toBeUndefined();
  expect(result.homepage).toBe("https://modrinth.com/mod/craftify");
  expect(Object.entries(result.latest).length).toBeGreaterThanOrEqual(1);
});
