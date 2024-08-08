import { describe, expect, test } from "bun:test";
import { ModrinthAPI } from "../../../src/ModrinthAPI";

const api = new ModrinthAPI({
  userAgent: "JSRinth Unit Tests",
});

test("Able to fetch categories", async () => {
  const result = await api.categories.fetch();

  expect(result.length).toBeGreaterThanOrEqual(0);
  expect(result.every((v) => v.header)).toBeTrue();
  expect(result.every((v) => v.name)).toBeTrue();
  expect(result.every((v) => v.projectType)).toBeTrue();
});

describe("Hardcoded Categories", async () => {
  test("Categories should not have empty icon", async () => {
    Object.values(api.categories.categories).forEach((category) => {
      expect(category.icon).not.toBe("");
    });
  });

  test("Categories should match API", async () => {
    const result = await api.categories.fetch();

    Object.values(api.categories.categories).forEach((category) => {
      const apiCategory = result.find(
        (v) =>
          v.name === category.name &&
          category.projectTypes.includes(v.projectType)
      );
      expect(apiCategory).toBeTruthy();
      const cat = apiCategory!;

      expect(category.icon || "").toBe(cat.icon!);
      expect(category.header).toBe(cat.header);
      expect(category.name).toBe(cat.name);
      expect(category.projectTypes).toContain(cat.projectType);
    });
  });

  test("Can get by project type", () => {
    expect(
      api.categories.byProjectType("mod").every((v) => v.projectType === "mod")
    ).toBeTrue();

    expect(
      api.categories
        .byProjectType("shader")
        .every((v) => v.projectType === "shader")
    ).toBeTrue();
  });

  test("Can get by header", () => {
    expect(
      api.categories
        .byHeader("performance impact")
        .every((v) => v.header === "performance impact")
    ).toBeTrue();

    expect(
      api.categories
        .byHeader("resolutions")
        .every((v) => v.header === "resolutions")
    ).toBeTrue();
  });
});
