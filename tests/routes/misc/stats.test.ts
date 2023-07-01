import { ModrinthAPI } from "../../../src/ModrinthAPI";
const api = new ModrinthAPI({
  userAgent: "JSRinth unit tests"
});

test("Able to get node stats", async () => {
  const stats = await api.getNodeStats();

  expect(stats.authors).toBeGreaterThanOrEqual(0);
  expect(stats.files).toBeGreaterThanOrEqual(0);
  expect(stats.projects).toBeGreaterThanOrEqual(0);
  expect(stats.versions).toBeGreaterThanOrEqual(0);
  expect(stats.ok).toBe(true);
});