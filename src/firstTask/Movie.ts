
import { MovieInfo } from "./types";

export default class Movie implements MovieInfo {
    readonly id: number;
    readonly name: string;
    readonly year: number;
    readonly country: string;
    readonly slogan: string;
    readonly genre: string[];
    readonly time: string;

    constructor(
        id: number,
        name: string,
        year: number,
        country: string,
        slogan: string,
        genre: string[],
        time: string
    ) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
    }
}

