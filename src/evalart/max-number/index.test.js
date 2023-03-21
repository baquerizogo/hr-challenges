import { maxNumber } from ".";

describe("maxNumber", () => {
	it("should return a number", () => {
		const res = maxNumber();
		expect(typeof res).toBe("number");
	});
});