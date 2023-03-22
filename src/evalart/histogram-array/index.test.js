import { histogramArray } from ".";

describe("histogramArray", () => {
	it("Should be a function", () => {
		expect(typeof histogramArray).toBe("function");
	});

	it("Should throw error if there's no array", () => {
		expect(histogramArray).toThrow();
	});

	it("Should show histogram for the following input", () => {
		const spyLog = jest.spyOn(console, "log");
		histogramArray([1,2,1,3,3,1,2,1,5,1]);
		expect(spyLog).toHaveBeenCalledWith("1: *****\n2: **\n3: **\n4: \n5: *");
	});

	it("Should show histogram for the following input that contains the same numbers", () => {
		const spyLog = jest.spyOn(console, "log");
		histogramArray([5,5,5,5,5,5,5,5,5,5]);
		expect(spyLog).toHaveBeenCalledWith("1: \n2: \n3: \n4: \n5: **********");
	});
});