import { MovieInfo } from "./types";

export default class Movie implements MovieInfo {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string[],
        readonly time: string,
        readonly price: number,
    ) {}
}
