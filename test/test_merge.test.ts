import {Merge}  from "../src/index";

describe("Merge function tests", () => {
    test("Normal case", () => {
        const col1 = [1, 4, 7];
        const col2 = [2, 5, 8];
        const col3 = [9, 6, 3];
        const result = Merge(col1, col2, col3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test("Empty arrays", () => {
        const col1: number[] = [];
        const col2: number[] = [];
        const col3: number[] = [];
        const result = Merge(col1, col2, col3);
        expect(result).toEqual([]);
    });
    test("One empty array", () => {
        const col1 = [1, 3, 5];
        const col2: number[] = [];
        const col3 = [6, 4, 2];
        const result = Merge(col1, col2, col3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("Two empty arrays", () => {
        const col1: number[] = [];
        const col2: number[] = [];
        const col3 = [3, 2, 1];
        const result = Merge(col1, col2, col3);
        expect(result).toEqual([1, 2, 3]);
    });
    test("Arrays with duplicate numbers", () => {
        const col1 = [1, 2, 2];
        const col2 = [2, 3, 4];
        const col3 = [4, 3, 1];
        const result = Merge(col1, col2, col3);
        expect(result).toEqual([1, 1, 2, 2, 2, 3, 3, 4, 4]);
    });
    test("Arrays of different lengths", () => {
        const col1 = [1, 5];
        const col2 = [2, 3, 4, 6];
        const col3 = [9, 8, 7];
        const result = Merge(col1, col2, col3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});