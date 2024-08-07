import { expect, test } from "bun:test";
import { ModrinthAPI } from "../../../src/ModrinthAPI";

const api = new ModrinthAPI({
  userAgent: "JSRinth Unit Tests",
});

test("Get node statistics", async () => {
  const stats = await api.statistics();

  expect(stats.authors).toBeGreaterThanOrEqual(0);
  expect(stats.files).toBeGreaterThanOrEqual(0);
  expect(stats.projects).toBeGreaterThanOrEqual(0);
  expect(stats.versions).toBeGreaterThanOrEqual(0);
});
