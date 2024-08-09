export interface Category {
  icon?: string;
  name: CategoryName;
  projectType: ProjectType;
  header: CategoryHeader;
}

// curl https://api.modrinth.com/v2/tag/category | jq -s '.[] | unique_by(.project_type)[] | .project_type'
export type ProjectType = "mod" | "modpack" | "resourcepack" | "shader";

// curl https://api.modrinth.com/v2/tag/category | jq -s '.[] | unique_by(.header)[] | .header'
export type CategoryHeader =
  | "categories"
  | "features"
  | "performance impact"
  | "resolutions";

// curl https://api.modrinth.com/v2/tag/category | jq -s '.[] | unique_by(.name)[] | .name' | tr '\n' '|'
export type CategoryName =
  | "128x"
  | "16x"
  | "256x"
  | "32x"
  | "48x"
  | "512x+"
  | "64x"
  | "8x-"
  | "adventure"
  | "atmosphere"
  | "audio"
  | "blocks"
  | "bloom"
  | "cartoon"
  | "challenging"
  | "colored-lighting"
  | "combat"
  | "core-shaders"
  | "cursed"
  | "decoration"
  | "economy"
  | "entities"
  | "environment"
  | "equipment"
  | "fantasy"
  | "foliage"
  | "fonts"
  | "food"
  | "game-mechanics"
  | "gui"
  | "high"
  | "items"
  | "kitchen-sink"
  | "library"
  | "lightweight"
  | "locale"
  | "low"
  | "magic"
  | "management"
  | "medium"
  | "minigame"
  | "mobs"
  | "modded"
  | "models"
  | "multiplayer"
  | "optimization"
  | "path-tracing"
  | "pbr"
  | "potato"
  | "quests"
  | "realistic"
  | "reflections"
  | "screenshot"
  | "semi-realistic"
  | "shadows"
  | "simplistic"
  | "social"
  | "storage"
  | "technology"
  | "themed"
  | "transportation"
  | "tweaks"
  | "utility"
  | "vanilla-like"
  | "worldgen";

export type LoaderProjectType = ProjectType | "datapack" | "plugin";

export interface ProjectLoader {
  icon: string;
  name: LoaderName;
  projectTypes: LoaderProjectType[];
}

// curl https://api.modrinth.com/v2/tag/loader | jq -s '.[] | unique_by(.name)[] | .name' | tr '\n' '|'
export type LoaderName =
  | "bukkit"
  | "bungeecord"
  | "canvas"
  | "datapack"
  | "fabric"
  | "folia"
  | "forge"
  | "iris"
  | "liteloader"
  | "minecraft"
  | "modloader"
  | "neoforge"
  | "optifine"
  | "paper"
  | "purpur"
  | "quilt"
  | "rift"
  | "spigot"
  | "sponge"
  | "vanilla"
  | "velocity"
  | "waterfall";
