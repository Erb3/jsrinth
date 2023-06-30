import { HTTPEnum } from "./HTTPEnum";

export interface Route {
    path: string,
    type: HTTPEnum
}