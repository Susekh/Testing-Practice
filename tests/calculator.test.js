import { add, sub, mult, div } from '../codes/calculator';

test('1 + 2  = 3', () => {
    expect(add(1, 2)).toEqual(3);
});

test('2 - 2 = 0', () => {
    expect(sub(2, 2)).toEqual(0);
});

test('3 * 5 = 15', () => {
    expect(mult(3, 5)).toEqual(15);
})

test('10 / 5 = 2', () => {
    expect(div(10, 5)).toEqual(2)
})

test('10 / 0 = Null', () => {
    expect(div(10, 0)).toBeNull();
})