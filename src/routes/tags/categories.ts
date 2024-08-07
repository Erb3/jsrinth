import type { ModrinthAPI } from "../../ModrinthAPI";
import {
  Categories,
  type CategoryHeader,
  type CategoryName,
  type Category as ProjectCategory,
  type ProjectType,
} from "../../types/categories";

export function getCategoriesByProjectType(
  projectType: ProjectType
): ProjectCategory[] {
  return Object.values(Categories)
    .filter((v) => v.projectTypes.includes(projectType))
    .map((v) => ({
      projectType,
      header: v.header,
      icon: v.icon,
      name: v.name,
    }));
}

export function getCategoriesByHeader(header: CategoryHeader): {
  icon?: string;
  name: CategoryName;
  projectTypes: ProjectType[];
  header: CategoryHeader;
}[] {
  return Object.values(Categories).filter((v) => v.header == header);
}

export async function fetchCategories(
  this: ModrinthAPI
): Promise<ProjectCategory[]> {
  const res = await this._request<
    {
      icon?: string;
      name: CategoryName;
      project_type: ProjectType;
      header: CategoryHeader;
    }[]
  >("GET", "tag/category");

  return res.map((v) => ({
    icon: v.icon,
    name: v.name,
    header: v.header,
    projectType: v.project_type,
  }));
}
