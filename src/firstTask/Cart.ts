import Movie from "./Movie";
import { MovieInfo } from "./types";

export default class Cart {
	private _items: MovieInfo[] = [];
	
	add(item: MovieInfo): void {
		this._items.push(item);
	}
	get items(): MovieInfo[] {
		return [...this._items];
	}
}