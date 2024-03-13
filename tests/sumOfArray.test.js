import { getSumOfArray } from '..'

describe('sumOfArray.js', () => {
    test('Get sum of all numbers in the array', () => {
        expect(getSumOfArray([1, 3])).toBe(4)
    })
})
