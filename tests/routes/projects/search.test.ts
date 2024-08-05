import { describe, expect, test } from "bun:test";
import { ModrinthAPI } from "../../../src/ModrinthAPI";
import { Facets } from "../../../src/routes/projects/searchProjects";

const api = new ModrinthAPI({
  userAgent: "JSRinth Unit Tests",
});

describe("Facet building", () => {
  test("Build basic downloads facet", () => {
    expect(Facets.downloads().greaterThanOrEqualsTo(1000).build()).toEqual([
      "downloads >= 1000",
    ]);
  });

  test("Build downloads or followers facet", () => {
    expect(
      Facets.downloads()
        .greaterThanOrEqualsTo(1000)
        .or(Facets.follows().greaterThanOrEqualsTo(25))
        .build()
    ).toEqual(["downloads >= 1000", "follows >= 25"]);
  });

  test("Build with string or", () => {
    expect(
      Facets.author().equals("Erb3").or("ModrinthArchives", "Lemmmy").build()
    ).toEqual([
      "author = Erb3",
      "author = ModrinthArchives",
      "author = Lemmmy",
    ]);
  });

  test("Build with >= (number)", () => {
    expect(Facets.downloads().greaterThanOrEqualsTo(2).build()).toEqual([
      "downloads >= 2",
    ]);
  });

  test("Build with > (number)", () => {
    expect(Facets.downloads().greaterThan(2).build()).toEqual([
      "downloads > 2",
    ]);
  });

  test("Build with <= (number)", () => {
    expect(Facets.downloads().lessThanOrEqualsTo(1_000_000).build()).toEqual([
      "downloads <= 1000000",
    ]);
  });

  test("Build with < (number)", () => {
    expect(Facets.downloads().lessThan(1_000_000).build()).toEqual([
      "downloads < 1000000",
    ]);
  });

  test("Build with = (number)", () => {
    expect(Facets.downloads().equals(2).build()).toEqual(["downloads = 2"]);
  });

  test("Build with != (number)", () => {
    expect(Facets.downloads().notEquals(2).build()).toEqual(["downloads != 2"]);
  });

  test("Build with = (string)", () => {
    expect(Facets.author().equals("Erb3").build()).toEqual(["author = Erb3"]);
  });

  test("Build with != (string)", () => {
    expect(Facets.author().notEquals("Erb3").build()).toEqual([
      "author != Erb3",
    ]);
  });
});

// test("Searching", () => {
//   api.searchProjects({
//     query: "Cactusfix",
//     sort: "downloads",
//     facets: [Facets.categories().equals("fabric")],
//   });
// });
