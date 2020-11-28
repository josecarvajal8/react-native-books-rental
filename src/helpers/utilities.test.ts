import utilities from './utilities';
describe('suite test for has() function', () => {
    test('check if the object has the property', () => {
        const data = { foo: 'a' };
        const expected = true;
        expect(utilities.has(data, 'foo')).toEqual(expected);
    });
    test('should check that the object does not have the property', () => {
        const data = { foo: 'a' };
        const expected = false;
        expect(utilities.has(data, 'fo')).toEqual(expected);
    })
});

describe('suite test for arrayHasItems() function', () => {
    test('check if the array has items', () => {
        const data = [1, 2, 3, 4, 5];
        const expected = true;
        expect(utilities.arrayHasItems(data)).toEqual(expected);
    });
    test('check if the array  is empty', () => {
        const data: any = [];
        const expected = false;
        expect(utilities.arrayHasItems(data)).toEqual(expected);
    });
});

describe('suite test for isObject() function', () => {
    test('check if the value is an object', () => {
        const data = {};
        const expected = true;
        expect(utilities.isObject(data)).toEqual(expected);
    });
    test('check if the value is not an object', () => {
        const data: any = [];
        const expected = false;
        expect(utilities.isObject(data)).toEqual(expected);
    });
});

describe('suite test for range() function', () => {
    test('should generate an array according to the range passed, incrementing by 1', () => {
        const start = 1;
        const stop = 4;
        const step = 1;
        const expected = [1, 2, 3, 4];
        expect(utilities.range(start, stop, step)).toEqual(expected);
    });
    test('should generate an array according to the range passed, incrementing by 2', () => {
        const start = 2;
        const stop = 10;
        const step = 2;
        const expected = [2, 4, 6, 8, 10];
        expect(utilities.range(start, stop, step)).toEqual(expected);
    });
})