import { add } from './stringCalculator';

describe('String Calculator', () => {
    //empty string
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    //single number
    test('should return 1 for input "1"', () => {
        expect(add("1")).toBe(1);
    });

    //multiple numbers
    test('should return 3 for input "1,2"', () => {
        expect(add("1,2")).toBe(3);
    });

    //handling newlines
    test('should handle newlines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    //custom delimiters
    test('should support different delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    //Negative Numbers
    test('should throw an error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    });

    //Multiple Negative Numbers
    test('should throw an error for multiple negative numbers', () => {
        expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
    });
});
