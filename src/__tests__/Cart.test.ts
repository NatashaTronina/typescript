import Cart from "../firstTask/Cart";
import Movie from "../firstTask/Movie";
import { MovieInfo } from "../firstTask/types";

describe('Корзина при добавлении фильмов', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    test('корзина должна быть пустой', () => {
        expect(cart.items).toEqual([]);
    });

    test('Должен добавить один фильм в корзинy', () => {
        const movie1: MovieInfo = new Movie(
            1,
            'Начало',
            2010,
            'США, Великобритания',
            'Твой разум — место преступления',
            ['фантастика', 'боевик', 'детектив'],
            '2ч 28м'
        );

        cart.add(movie1);

        expect(cart.items.length).toBe(1);
        expect(cart.items[0]).toEqual(movie1);
    });

    test('Должен добавить несколько фильмов в корзину', () => {
        const movie1: MovieInfo = new Movie(
            1, 'Начало', 2010, 'США, Великобритания', '...', ['фантастика', 'боевик'], '2ч 28м'
        );
        const movie2: MovieInfo = new Movie(
            2, 'Интерстеллар', 2014, 'США, Великобритания', '...', ['фантастика', 'драма'], '2ч 49м'
        );
        const movie3: MovieInfo = new Movie(
            3, 'Двойник', 2013, 'Великобритания', '...', ['драма', 'триллер'], '1ч 33м'
        );

        cart.add(movie1);
        cart.add(movie2);
        cart.add(movie3);

        expect(cart.items.length).toBe(3);
        expect(cart.items).toEqual([movie1, movie2, movie3]);
    });

    test('Должен получать копии массива элементов', () => {
        const movie1: MovieInfo = new Movie(
            1, 'Начало', 2010, 'США, Великобритания', '...', ['фантастика', 'боевик'], '2ч 28м'
        );
        cart.add(movie1);

        const items1 = cart.items;
        const items2 = cart.items;

        expect(items1).toEqual([movie1]);
        expect(items2).toEqual([movie1]);
        
        expect(items1).not.toBe(items2); 
        
        items1.push(new Movie(99, 'Неизвестный', 2000, '...', '...', [], '...'));
        expect(cart.items.length).toBe(1); 
    });
    test('Должен добавиться один и тот же фильм дважды', () => {
        const movie1: MovieInfo = new Movie(
            1, 'Начало', 2010, 'США, Великобритания', '...', ['фантастика', 'боевик'], '2ч 28м'
        );

        cart.add(movie1);
        cart.add(movie1); 

        expect(cart.items.length).toBe(2); 
        expect(cart.items).toEqual([movie1, movie1]);
    });
});