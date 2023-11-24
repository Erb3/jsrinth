import { ModrinthAPI } from "../../ModrinthAPI";

export interface SearchOptions {
  query?: string;
  facets?: Facet[] | Facet;
  index?: "relevance" | "downloads" | "follows" | "newest" | "updated";
  offset?: number;
  limit?: number;
}

export async function searchProjects(
  parent: ModrinthAPI,
  options: SearchOptions
) {}

export enum FacetType {
  project_type,
  categories,
  versions,
  client_side,
  server_side,
  open_source,
  title,
  author,
  follows,
  project_id,
  license,
  downloads,
  color,
  created_timestamp,
  modified_timestamp,
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

export const Facets = {
  equals(type: FacetType, val: FacetValue) {
    return new Facet(type, FacetOperation["="], val);
  },
  notEquals(type: FacetType, val: FacetValue) {
    return new Facet(type, FacetOperation["!="], val);
  },
  greaterThanOrEquals(type: FacetType, val: FacetValue) {
    return new Facet(type, FacetOperation[">="], val);
  },
  greaterThan(type: FacetType, val: FacetValue) {
    return new Facet(type, FacetOperation[">"], val);
  },
  lessThanOrEquals(type: FacetType, val: FacetValue) {
    return new Facet(type, FacetOperation["<="], val);
  },
  lessThan(type: FacetType, val: FacetValue) {
    return new Facet(type, FacetOperation["<"], val);
  },
};

export class Facet {
  facet: string[] = [];

  constructor(type: FacetType, op: FacetOperation, val: FacetValue) {
    this.facet.push(
      `${FacetType[type]} ${FacetOperation[op]} ${val.toString()}`
    );
  }

  or(...facets: Facet[]) {
    facets.forEach((facet) => {
      this.facet.push(...facet.facet);
    });
    return this;
  }
}
