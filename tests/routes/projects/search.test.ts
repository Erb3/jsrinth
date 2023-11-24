import { ModrinthAPI } from "../../../src/ModrinthAPI";
import { FacetType, Facets } from "../../../src/routes/projects/searchProjects";
const api = new ModrinthAPI({
  userAgent: "JSRinth Unit Tests",
});

test("Facet building", () => {
  expect(
    [
      Facets.greaterThanOrEquals(FacetType.follows, 100).or(
        Facets.greaterThanOrEquals(FacetType.downloads, 2500)
      ),
      Facets.equals(FacetType.author, "Erb3").or(
        Facets.equals(FacetType.author, "ModrinthArchives")
      ),
    ].map((v) => v.facet)
  ).toEqual([
    ["follows >= 100", "downloads >= 2500"],
    ["author = Erb3", "author = ModrinthArchives"],
  ]);
});
