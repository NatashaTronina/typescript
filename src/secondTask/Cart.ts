
import { MovieInfo } from "./types";




export default class Cart {
	private _items: MovieInfo[] = []; 
	
	add(item: MovieInfo): void {
		this._items.push(item);
	}

	get items(): MovieInfo[] {
		return [...this._items]; 
	}
	getTotalCost(): number {
		return this._items.reduce((sum, currentItem) => sum + currentItem.price, 0);
	}

	getTotalCostWithDiscount(discount: number): number {
		if (discount < 0 || discount > 100) {
			throw new Error("Процент скидки должен быть от 0 до 100.");
		}
		
		const total = this.getTotalCost();
		const discountAmount = (total * discount) / 100;
		return total - discountAmount;
	}

	removeById(itemId: number): void {
		this._items = this._items.filter(item => item.id !== itemId);
	}
	
    count(): number {
        return this._items.length;
    }
}