import { maxNumber } from ".";

describe("maxNumber", () => {
	it("should return a number", () => {
		const res = maxNumber([0]);
		expect(typeof res).toBe("number");
	});

	it("should throw error if there is no parameters", () => {
		expect(maxNumber).toThrow();
	});

	it("should throw error if there the parameter is not an array", () => {
		expect(() => maxNumber(2)).toThrow();
	});

	it("should return the max number (87) of the array", () => {
		const res = maxNumber([10, 2, 3, 87, 4]);
		expect(res).toBe(87);
	});

	it("should return the max number (25) of the array even if the number is repeated", () => {
		const res = maxNumber([10, 25, 3, 25, 4]);
		expect(res).toBe(25);
	});
});