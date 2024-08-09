import { describe, expect, test } from "bun:test";
import { ModrinthAPI } from "../../../src/ModrinthAPI";

const api = new ModrinthAPI({
  userAgent: "JSRinth Unit Tests",
});

test("Able to fetch loaders", async () => {
  const result = await api.loaders.fetch();

  expect(result.length).toBeGreaterThanOrEqual(0);
  expect(result.every((v) => v.name)).toBeTrue();
  expect(result.some((v) => v.name === "fabric")).toBeTrue();
});

describe("Hardcoded Loaders", async () => {
  test("Loaders should match API", async () => {
    const result = await api.loaders.fetch();

    Object.values(api.loaders.loaders).forEach((loader) => {
      let apiLoader = result.find((v) => v.name === loader.name);

      expect(apiLoader).toBeTruthy();
      apiLoader = apiLoader!;

      expect(apiLoader.icon || "").toBe(apiLoader.icon);
      expect(apiLoader.name).toBe(apiLoader.name);
      expect(apiLoader.projectTypes).toBe(apiLoader.projectTypes);
    });

    result.forEach((v) => {
      expect(api.loaders.loaders[v.name]).toBeTruthy();
    });
  });

  test("Get by project type", () => {
    const plugins = api.loaders.byProjectType("plugin");

    expect(plugins.length).toBeGreaterThan(0);
    expect(plugins.every((v) => v.projectTypes.includes("plugin"))).toBeTrue();
  });
});
