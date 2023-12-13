import { ModrinthAPI } from "../../../src/ModrinthAPI";
import { Facets } from "../../../src/routes/projects/searchProjects";
const api = new ModrinthAPI({
  userAgent: "JSRinth Unit Tests",
});

test("Facet building", () => {
  expect([
    Facets.follows()
      .greaterThanOrEqualsTo(100)
      .or(Facets.downloads().greaterThanOrEqualsTo(2500)).alternatives,
    Facets.author().equals("Erb3").or("ModrinthArchives", "Lemmmy")
      .alternatives,
  ]).toEqual([
    ["follows >= 100", "downloads >= 2500"],
    ["author = Erb3", "author = ModrinthArchives", "author = Lemmmy"],
  ]);
});

// test("Searching", () => {
//   api.searchProjects({
//     query: "Cactusfix",
//     sort: "downloads",
//     facets: [Facets.categories().equals("fabric")],
//   });
// });
