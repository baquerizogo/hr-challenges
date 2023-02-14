import { diagonalDifference } from ".";

describe("Diagonal difference", (): void => {
	it("should return a number", (): void => {
		const res = diagonalDifference([]);
		expect(typeof res).toBe("number");
	});

	it("should throw error if it's not a square matrix", (): void => {
		expect(() => diagonalDifference([[1,2,3],[4,5,6],[9,8]])).toThrow();
	});

	it("should return 2 as the abs difference of the input matrix", (): void => {
		const res = diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]);
		expect(res).toBe(2);
	});

	it("should return 15 as the abs difference of the input matrix", (): void => {
		const res = diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]);
		expect(res).toBe(15);
	});
	
});