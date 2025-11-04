import Cart from "../secondTask/Cart";
import Movie from "../secondTask/Movie";
import { MovieInfo } from "../secondTask/types";

describe('Cart class with new functions', () => {
    let cart: Cart;
    let movie1: MovieInfo; 
    let movie2: MovieInfo;
    let movie3: MovieInfo;

    beforeEach(() => {
        cart = new Cart();
        movie1 = new Movie(1, 'Начало', 2010, 'США', '...', ['фантастика'], '2ч 28м', 349);
        movie2 = new Movie(2, 'Интерстеллар', 2013, 'США', '...', ['фантастика'], '2ч 49м', 299);
        movie3 = new Movie(3, 'Двойник', 2014, '...', '...', ['драма'], '1ч 33м', 199);
    });


    test('корзина должна быть пустой', () => {
        expect(cart.items.length).toBe(0);
    });

    test('Должен добавить один фильм в корзинy', () => {
        cart.add(movie1);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0]).toEqual(movie1);
    });

    test('Должен получать копии массива элементов', () => {
        cart.add(movie1);
        const items1 = cart.items;
        const items2 = cart.items;
        expect(items1).not.toBe(items2);
        expect(items1.length).toBe(1);
    });

    test('getTotalCost должен рассчитать правильную общую стоимость', () => {
        cart.add(movie1); 
        cart.add(movie2); 
        cart.add(movie3); 


        expect(cart.getTotalCost()).toBe(847);

        const emptyCart = new Cart();
        expect(emptyCart.getTotalCost()).toBe(0);
    });

    test('getTotalCostWithDiscount должен рассчитать общую стоимость с учетом действующей скидки', () => {
        cart.add(movie1); 
        cart.add(movie2);

        expect(cart.getTotalCostWithDiscount(10)).toBeCloseTo(648 * 0.9);
        expect(cart.getTotalCostWithDiscount(50)).toBeCloseTo(648 * 0.5);
        expect(cart.getTotalCostWithDiscount(0)).toBeCloseTo(648);
        expect(cart.getTotalCostWithDiscount(100)).toBeCloseTo(0);
    });

    test('getTotalCostWithDiscount должен выдавать ошибку из-за недопустимых процентов скидки', () => {
        cart.add(movie1);
        expect(() => cart.getTotalCostWithDiscount(-10)).toThrow("Процент скидки должен быть от 0 до 100.");
        expect(() => cart.getTotalCostWithDiscount(110)).toThrow("Процент скидки должен быть от 0 до 100.");
    });

    test('removeById должен удалять элемент по его ID', () => {
        cart.add(movie1); 
        cart.add(movie2); 
        cart.add(movie3); 

        expect(cart.items.length).toBe(3);

        cart.removeById(2);

        expect(cart.items.length).toBe(2);
        expect(cart.items).toEqual([movie1, movie3]);
        expect(cart.items.find(item => item.id === 2)).toBeUndefined(); 
    });

    test('removeById ничего не должен делать, если ID не существует', () => {
        cart.add(movie1);
        cart.add(movie2);

        const initialLength = cart.items.length;
        const initialItems = cart.items;

        cart.removeById(99);

        expect(cart.items.length).toBe(initialLength); 
        expect(cart.items).toEqual(initialItems);     
    });

    test('removeById должен корректно удалять единственный товар из корзины', () => {
        cart.add(movie1);
        expect(cart.items.length).toBe(1);

        cart.removeById(1); 

        expect(cart.items.length).toBe(0);
        expect(cart.items).toEqual([]);
    });

    test('count должен возвращать правильное количество элементов', () => {
        expect(cart.count()).toBe(0);
        cart.add(movie1);
        expect(cart.count()).toBe(1);
        cart.add(movie2);
        expect(cart.count()).toBe(2);
        cart.removeById(1);
        expect(cart.count()).toBe(1);
        cart.removeById(2);
        expect(cart.count()).toBe(0);
    });
});