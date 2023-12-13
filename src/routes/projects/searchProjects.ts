import { ModrinthAPI } from "../../ModrinthAPI";

export async function searchProjects(
  parent: ModrinthAPI,
  options: SearchOptions
) {}

export enum FacetType {
  project_type = "projectType",
  categories = "categories",
  versions = "versions",
  client_side = "clientSide",
  server_side = "serverSide",
  open_source = "openSource",
  title = "title",
  author = "author",
  follows = "follows",
  project_id = "projectId",
  license = "license",
  downloads = "downloads",
  color = "color",
  created_timestamp = "createdTimestamp",
  modified_timestamp = "modifiedTimestamp",
}

export enum FacetOperation {
  "=",
  "!=",
  ">=",
  ">",
  "<=",
  "<",
}

export type FacetValue = string | number;

export const Facets: { [key in FacetType]: () => SingleFacetBuilder } = {
  [FacetType.project_type]: () =>
    new SingleFacetBuilder(FacetType.project_type),
  [FacetType.categories]: () => new SingleFacetBuilder(FacetType.categories),
  [FacetType.versions]: () => new SingleFacetBuilder(FacetType.versions),
  [FacetType.client_side]: () => new SingleFacetBuilder(FacetType.client_side),
  [FacetType.server_side]: () => new SingleFacetBuilder(FacetType.server_side),
  [FacetType.open_source]: () => new SingleFacetBuilder(FacetType.open_source),
  [FacetType.title]: () => new SingleFacetBuilder(FacetType.title),
  [FacetType.author]: () => new SingleFacetBuilder(FacetType.author),
  [FacetType.follows]: () => new SingleFacetBuilder(FacetType.follows),
  [FacetType.project_id]: () => new SingleFacetBuilder(FacetType.project_id),
  [FacetType.license]: () => new SingleFacetBuilder(FacetType.license),
  [FacetType.downloads]: () => new SingleFacetBuilder(FacetType.downloads),
  [FacetType.color]: () => new SingleFacetBuilder(FacetType.color),
  [FacetType.created_timestamp]: () =>
    new SingleFacetBuilder(FacetType.created_timestamp),
  [FacetType.modified_timestamp]: () =>
    new SingleFacetBuilder(FacetType.modified_timestamp),
};

export interface SearchOptions {
  query?: string;
  facets?: SingleFacetBuilder[] | SingleFacetBuilder;
  sort?: "relevance" | "downloads" | "follows" | "newest" | "updated";
  offset?: number;
  limit?: number;
}

class SingleFacetBuilder {
  facetType: FacetType;
  facetOperation?: FacetOperation;
  facetValue?: FacetValue;
  alternatives: string[] = [];

  constructor(facetType: FacetType) {
    this.facetType = facetType;
  }

  equals(value: FacetValue): SingleFacetBuilder {
    this.facetOperation = FacetOperation["="];
    this.facetValue = value;
    this.build();
    return this;
  }

  notEquals(value: FacetValue): SingleFacetBuilder {
    this.facetOperation = FacetOperation["!="];
    this.facetValue = value;
    this.build();
    return this;
  }

  greaterThanOrEqualsTo(value: FacetValue): SingleFacetBuilder {
    this.facetOperation = FacetOperation[">="];
    this.facetValue = value;
    this.build();
    return this;
  }

  greaterThan(value: FacetValue): SingleFacetBuilder {
    this.facetOperation = FacetOperation[">"];
    this.facetValue = value;
    this.build();
    return this;
  }

  lessThanOrEqualsTo(value: FacetValue): SingleFacetBuilder {
    this.facetOperation = FacetOperation["<="];
    this.facetValue = value;
    this.build();
    return this;
  }

  lessThan(value: FacetValue): SingleFacetBuilder {
    this.facetOperation = FacetOperation["<"];
    this.facetValue = value;
    this.build();
    return this;
  }

  or(...facets: SingleFacetBuilder[] | FacetValue[]) {
    facets.forEach((facet) => {
      if (facet instanceof SingleFacetBuilder) {
        this.alternatives.push(...facet.alternatives);
      } else {
        const newFacet = new SingleFacetBuilder(this.facetType);
        newFacet.facetOperation = this.facetOperation;
        newFacet.facetValue = facet;
        newFacet.build();
        this.alternatives.push(...newFacet.alternatives);
      }
    });

    return this;
  }

  build(): string[] {
    if (this.facetOperation === undefined || this.facetValue === undefined)
      throw new Error("Cannot build facet without operation and value.");

    this.alternatives.push(
      `${this.facetType} ${FacetOperation[this.facetOperation]} ${
        this.facetValue
      }`
    );

    return this.alternatives;
  }
}
