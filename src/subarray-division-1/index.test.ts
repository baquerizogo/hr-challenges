import { birthday } from ".";

describe("Subarray division", (): void => {
	it("Should return a number", (): void => {
		const res = birthday([1], 1, 1);
		expect(typeof res).toBe("number");
	});

	it("Should throw error if array length is less than 1 or greater than 100", (): void => {
		expect(() => birthday([], 1, 1)).toThrow();
	});

	it("Should throw error if array elements are less than 1 or greater than 5", (): void => {
		expect(() => birthday([6], 1, 1)).toThrow();
	});

	it("Should throw error if day is less than 1 or greater than 31", (): void => {
		expect(() => birthday([5], 32, 1)).toThrow();
	});

	it("Should throw error if month is less than 1 or greater than 12", (): void => {
		expect(() => birthday([5], 1, 13)).toThrow();
	});

	it("Should return 2 for the following input", (): void => {
		const res = birthday([2, 2, 1, 3, 2], 4, 2);
		expect(res).toBe(2);
	});

	it("Should return 2 for the following input", (): void => {
		const res = birthday([1, 2, 1, 3, 2], 3, 2);
		expect(res).toBe(2);
	});

	it("Should return 1 for the following input", (): void => {
		const res = birthday([4], 4, 1);
		expect(res).toBe(1);
	});

	it("Should return 3 for the following input", (): void => {
		const res = birthday([2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1], 18, 7);
		expect(res).toBe(3);
	});
});