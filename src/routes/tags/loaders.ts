import type { ModrinthAPI } from "../../ModrinthAPI";
import type {
  LoaderName,
  LoaderProjectType,
  ProjectLoader,
} from "../../types/tags";

export function getLoadersByProjectType(
  projectType: LoaderProjectType
): ProjectLoader[] {
  return Object.values(loaders)
    .filter((v) => v.projectTypes.includes(projectType))
    .map((v) => ({
      projectTypes: v.projectTypes,
      icon: v.icon,
      name: v.name,
    }));
}

export async function fetchLoaders(
  this: ModrinthAPI
): Promise<ProjectLoader[]> {
  const res = await this._request<
    {
      icon: string;
      name: LoaderName;
      supported_project_types: (LoaderProjectType | "project")[];
    }[]
  >("GET", "tag/loader");

  return res.map((v) => ({
    icon: v.icon,
    name: v.name,
    projectTypes: v.supported_project_types.filter((v) => v !== "project"),
  }));
}

export const loaders: {
  [T in LoaderName]: {
    icon: string;
    name: T;
    projectTypes: LoaderProjectType[];
  };
} = {
  bukkit: {
    icon: '<svg viewBox="0 0 292 319" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" stroke="currentColor"><g transform="matrix(1,0,0,1,0,-5)"><path d="M12,109.5L12,155L34.5,224L57.5,224L57.5,271L81,294L160,294L160,172L259.087,172L265,155L265,109.5M12,109.5L12,64L34.5,64L34.5,41L81,17L195.5,17L241,41L241,64L265,64L265,109.5M12,109.5L81,109.5L81,132L195.5,132L195.5,109.5L265,109.5M264.087,204L264.087,244M207.5,272L207.5,312M250,272L250,312L280,312L280,272L250,272ZM192.5,204L192.5,244L222.5,244L222.5,204L192.5,204Z" style="fill:none;fill-rule:nonzero;stroke-width:24px;"/></g></svg>',
    name: "bukkit",
    projectTypes: ["plugin", "mod"],
  },
  bungeecord: {
    icon: '<svg viewBox="0 0 24 24" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;">\n    <rect id="Bungeecord" x="-0" y="0" width="24" height="24" style="fill:none;"/>\n    <path d="M3.778,19.778C3.778,21.004 4.774,22 6,22C7.226,22 8.222,21.004 8.222,19.778L8.222,16.444C8.222,15.218 7.226,14.222 6,14.222L6,7.556C6,5.727 7.171,4.222 9,4.222C10.829,4.222 12,5.727 12,7.556L12,16.444" style="fill:none;fill-rule:nonzero;stroke:currentColor;stroke-width:2px;"/>\n    <path d="M7,15L6,13L5,15L7,15" style="fill:none;stroke:currentColor;stroke-width:2px;stroke-miterlimit:1.5;"/>\n    <path d="M20.222,4.444C20.222,3.218 19.226,2.222 18,2.222C16.774,2.222 15.778,3.218 15.778,4.444L15.778,7.778C15.778,9.004 16.774,10 18,10L18,16.667C18,18.495 16.829,20 15,20C13.171,20 12,18.495 12,16.667L12,7.778" style="fill:none;fill-rule:nonzero;stroke:currentColor;stroke-width:2px;"/>\n    <path d="M17,9.222L18,11.222L19,9.222L17,9.222" style="fill:none;stroke:currentColor;stroke-width:2px;stroke-miterlimit:1.5;"/>\n</svg>',
    name: "bungeecord",
    projectTypes: ["plugin", "mod"],
  },
  canvas: {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1.305 1.305 12 12 22.695 22.695 12 12 1.305Z" style=""/><path d="M12 5.547 5.547 12 12 18.453 18.453 12 12 5.547Z" style=""/><path d="M12 9.79 9.79 12 12 14.21 14.21 12 12 9.79Z" style=""/></svg>',
    name: "canvas",
    projectTypes: ["shader"],
  },
  datapack: {
    icon: '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" /></svg>',
    name: "datapack",
    projectTypes: ["datapack", "mod"],
  },
  fabric: {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24">\n  <path fill="none" d="M0 0h24v24H0z"/>\n  <path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"/>\n</svg>',
    name: "fabric",
    projectTypes: ["mod", "modpack"],
  },
  folia: {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>',
    name: "folia",
    projectTypes: ["plugin", "mod"],
  },
  forge: {
    icon: '<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24">\n  <path fill="none" d="M0 0h24v24H0z"></path>\n  <path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path>\n</svg>',
    name: "forge",
    projectTypes: ["mod", "modpack"],
  },
  iris: {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22.59 12.013-3.01 3.126v4.405l.005.019-4.251-.005-2.994 3.115h-.003l-3.003-3.132H5.1l-.018.005.005-4.424-2.994-3.116-.003-.023L5.1 8.858V4.452l-.005-.019 4.252.005 2.993-3.115h.003l3.003 3.132h4.234l.018-.005-.005 4.425 2.994 3.115" style="" transform="translate(-.344)"/><path d="m17.229 12.005-1.436 1.491v2.101l.003.009-2.028-.002-1.428 1.486h-.001l-1.433-1.494H8.887l-.008.002.002-2.11-1.428-1.486-.001-.011L8.887 10.5V8.399l-.002-.009 2.027.002 1.428-1.485h.002l1.432 1.494h2.019l.009-.003-.003 2.11 1.428 1.486" style="" transform="translate(-.344)"/></svg>',
    name: "iris",
    projectTypes: ["shader"],
  },
  liteloader: {
    icon: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none"/><path d="m3.924 21.537s3.561-1.111 8.076-6.365c2.544-2.959 2.311-1.986 4-4.172" fill="none" stroke="currentColor" stroke-width="2px"/><path d="m7.778 19s1.208-0.48 4.222 0c2.283 0.364 6.037-4.602 6.825-6.702 1.939-5.165 0.894-10.431 0.894-10.431s-4.277 4.936-6.855 7.133c-5.105 4.352-6.509 11-6.509 11" fill="none" stroke="currentColor" stroke-width="2px"/></svg>',
    name: "liteloader",
    projectTypes: ["mod"],
  },
  minecraft: {
    icon: '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" /></svg>',
    name: "minecraft",
    projectTypes: ["resourcepack"],
  },
  modloader: {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1.4 18V6h3.8v1.5h1.5V9h1.5V7.5h1.5V6h3.8v12H9.7v-5.3H9v1.5H6v-1.5h-.8V18H1.4zm12.1 0V6h3.8v9h5.3v3h-9.1z"/></svg>',
    name: "modloader",
    projectTypes: ["mod"],
  },
  neoforge: {
    icon: '<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m12 19.2v2m0-2v2"/><path d="m8.4 1.3c0.5 1.5 0.7 3 0.1 4.6-0.2 0.5-0.9 1.5-1.6 1.5m8.7-6.1c-0.5 1.5-0.7 3-0.1 4.6 0.2 0.6 0.9 1.5 1.6 1.5"/><path d="m3.6 15.8h-1.7m18.5 0h1.7"/><path d="m3.2 12.1h-1.7m19.3 0h1.8"/><path d="m8.1 12.7v1.6m7.8-1.6v1.6"/><path d="m10.8 18h1.2m0 1.2-1.2-1.2m2.4 0h-1.2m0 1.2 1.2-1.2"/><path d="m4 9.7c-0.5 1.2-0.8 2.4-0.8 3.7 0 3.1 2.9 6.3 5.3 8.2 0.9 0.7 2.2 1.1 3.4 1.1m0.1-17.8c-1.1 0-2.1 0.2-3.2 0.7m11.2 4.1c0.5 1.2 0.8 2.4 0.8 3.7 0 3.1-2.9 6.3-5.3 8.2-0.9 0.7-2.2 1.1-3.4 1.1m-0.1-17.8c1.1 0 2.1 0.2 3.2 0.7"/><path d="m4 9.7c-0.2-1.8-0.3-3.7 0.5-5.5s2.2-2.6 3.9-3m11.6 8.5c0.2-1.9 0.3-3.7-0.5-5.5s-2.2-2.6-3.9-3"/><path d="m12 21.2-2.4 0.4m2.4-0.4 2.4 0.4"/></g></svg>',
    name: "neoforge",
    projectTypes: ["mod", "modpack"],
  },
  optifine: {
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M10.985 9.205c0-1.38-1.121-2.5-2.5-2.5H7.156a2.5 2.5 0 0 0-2.5 2.5v5.59a2.5 2.5 0 0 0 2.5 2.5h1.329c1.379 0 2.5-1.12 2.5-2.5v-5.59ZM14.793 17.295v-9.34a1.252 1.252 0 0 1 1.25-1.25h3.301M18.007 10.997h-3.214" /></svg>',
    name: "optifine",
    projectTypes: ["shader"],
  },
  paper: {
    icon: '<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24">\n  <path fill="none" d="M0 0h24v24H0z"/>\n  <path fill="none" stroke="currentColor" stroke-width="2" d="m12 18 6 2 3-17L2 14l6 2"/>\n  <path stroke="currentColor" stroke-width="2" d="m9 21-1-5 4 2-3 3Z"/>\n  <path fill="currentColor" d="m12 18-4-2 10-9-6 11Z"/>\n</svg>',
    name: "paper",
    projectTypes: ["plugin", "mod"],
  },
  purpur: {
    icon: '<svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24">\n  <defs>\n    <path id="purpur" fill="none" stroke="currentColor" stroke-width="1.68" d="m264 41.95 8-4v8l-8 4v-8Z"></path>\n  </defs>\n  <path fill="none" d="M0 0h24v24H0z"></path>\n  <path fill="none" stroke="currentColor" stroke-width="1.77" d="m264 29.95-8 4 8 4.42 8-4.42-8-4Z" transform="matrix(1.125 0 0 1.1372 -285 -31.69)"></path>\n  <path fill="none" stroke="currentColor" stroke-width="1.77" d="m272 38.37-8 4.42-8-4.42" transform="matrix(1.125 0 0 1.1372 -285 -31.69)"></path>\n  <path fill="none" stroke="currentColor" stroke-width="1.77" d="m260 31.95 8 4.21V45" transform="matrix(1.125 0 0 1.1372 -285 -31.69)"></path>\n  <path fill="none" stroke="currentColor" stroke-width="1.77" d="M260 45v-8.84l8-4.21" transform="matrix(1.125 0 0 1.1372 -285 -31.69)"></path>\n  <use xlink:href="#purpur" stroke-width="1.68" transform="matrix(1.125 0 0 1.2569 -285 -40.78)"></use>\n  <use xlink:href="#purpur" stroke-width="1.68" transform="matrix(-1.125 0 0 1.2569 309 -40.78)"></use>\n</svg>',
    name: "purpur",
    projectTypes: ["plugin", "mod"],
  },
  quilt: {
    icon: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24">\n  <defs>\n    <path id="quilt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path>\n  </defs>\n  <path fill="none" d="M0 0h24v24H0z"></path>\n  <use xlink:href="#quilt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use>\n  <use xlink:href="#quilt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use>\n  <use xlink:href="#quilt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use>\n  <path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path>\n</svg>',
    name: "quilt",
    projectTypes: ["mod", "modpack"],
  },
  rift: {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M2.7 6.6v10.8l9.3 5.3 9.3-5.3V6.6L12 1.3zm0 0L12 12m9.3-5.4L12 12m0 10.7V12"/></svg>',
    name: "rift",
    projectTypes: ["mod"],
  },
  spigot: {
    icon: '<svg viewBox="0 0 332 284" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;fill:none;fill-rule:nonzero;stroke-width:24px;" stroke="currentColor"><path d="M147.5,27l27,-15l27.5,15l66.5,0l0,33.5l-73,-0.912l0,45.5l26,-0.088l0,31.5l-12.5,0l0,15.5l16,21.5l35,0l0,-21.5l35.5,0l0,21.5l24.5,0l0,55.5l-24.5,0l0,17l-35.5,0l0,-27l-35,0l-55.5,14.5l-67.5,-14.5l-15,14.5l18,12.5l-3,24.5l-41.5,1.5l-48.5,-19.5l6,-19l24.5,-4.5l16,-41l79,-36l-7,-15.5l0,-31.5l23.5,0l0,-45.5l-73.5,0l0,-32.5l67,0Z"/></svg>',
    name: "spigot",
    projectTypes: ["plugin", "mod"],
  },
  sponge: {
    icon: '<svg viewBox="0 0 268 313" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;fill:none;fill-rule:nonzero;stroke-width:24px;" stroke="currentColor"><path d="M84.299,35.5c-5.547,-13.776 -19.037,-23.5 -34.799,-23.5c-20.711,0 -37.5,16.789 -37.5,37.5c-0,20.711 16.789,37.5 37.5,37.5c20.711,0 37.5,-16.789 37.5,-37.5c0,-4.949 -0.959,-9.674 -2.701,-14Zm0,0l44.701,-8.5l28,65m0,0l-99,20l-18,47.5l15.5,37l-25,32.5l0,72l222.5,0l2.5,-72l-33.5,-117l-65,-20Zm-60,65l0,15m94,-13.5l0,13.5m-67.5,45l46,0l-12.5,50.5l-14.5,0l-19,-50.5Z"/></svg>',
    name: "sponge",
    projectTypes: ["plugin", "mod"],
  },
  vanilla: {
    icon: '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" /></svg>',
    name: "vanilla",
    projectTypes: ["shader"],
  },
  velocity: {
    icon: '<svg viewBox="0 0 500 500" fill="currentColor"><path d="M236.25 232.55l-54.08-73.79a11.86 11.86 0 00-11.91-4.62L84 171.57a11.88 11.88 0 00-8 5.88l-42.64 77.07a11.84 11.84 0 00.81 12.75l54.21 74a11.86 11.86 0 0011.91 4.62l86-17.37a11.85 11.85 0 008-5.89l42.78-77.3a11.86 11.86 0 00-.82-12.78zm-59.45 74.21a9.57 9.57 0 01-13.39-2.06l-31-42.24a16 16 0 00-16-6.21l-52.58 10.63a9.58 9.58 0 01-11.29-7.49A9.58 9.58 0 0160 248.1l57-11.52a16 16 0 0010.81-7.92L156.42 177a9.58 9.58 0 0113-3.75 9.58 9.58 0 013.75 13L146.81 234a16 16 0 001.09 17.16l31 42.23a9.58 9.58 0 01-2.1 13.37z"/><circle cx="416.44" cy="236.11" r="9.83"/><path d="M458.29 265.6H280.52a9.83 9.83 0 110-19.66h106.22a9.84 9.84 0 000-19.67h-70.2a9.83 9.83 0 110-19.66H422.9a9.84 9.84 0 000-19.67H202.83l33.42 45.61a11.86 11.86 0 01.81 12.75l-42.78 77.3a11.75 11.75 0 01-1.4 2h212.29a9.83 9.83 0 100-19.66h-53.53a9.84 9.84 0 110-19.67h106.65a9.84 9.84 0 100-19.67z"/></svg>',
    name: "velocity",
    projectTypes: ["plugin", "mod"],
  },
  waterfall: {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
    name: "waterfall",
    projectTypes: ["plugin", "mod"],
  },
};
