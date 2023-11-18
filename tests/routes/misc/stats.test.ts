import { ModrinthAPI } from "../../../src/ModrinthAPI";
const api = new ModrinthAPI({
  userAgent: "JSRinth Unit Tests",
});

test("Able to get node stats", async () => {
  const stats = await api.getNodeStats();

  expect(stats.authors).toBeGreaterThanOrEqual(0);
  expect(stats.files).toBeGreaterThanOrEqual(0);
  expect(stats.projects).toBeGreaterThanOrEqual(0);
  expect(stats.versions).toBeGreaterThanOrEqual(0);
  expect(stats.ok).toBe(true);
});

test("Able to use getTotalAuthors", async () => {
  const totalVersions = await api.getTotalVersions();
  expect(totalVersions).toBeGreaterThanOrEqual(0);
});

test("Able to use getTotalFiles", async () => {
  const totalVersions = await api.getTotalVersions();
  expect(totalVersions).toBeGreaterThanOrEqual(0);
});

test("Able to use getTotalProjects", async () => {
  const totalVersions = await api.getTotalVersions();
  expect(totalVersions).toBeGreaterThanOrEqual(0);
});

test("Able to use getTotalVersions", async () => {
  const totalVersions = await api.getTotalVersions();
  expect(totalVersions).toBeGreaterThanOrEqual(0);
});
