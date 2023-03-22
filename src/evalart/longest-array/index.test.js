import { longestArray } from ".";

describe("longestArray", () => {
	it("Should return the longest and the coincidences for the following input sorted", () => {
		const spyLog = jest.spyOn(console, "log");
		longestArray([1,2,2,4,5,6,7,8,8,8]);
		expect(spyLog).toHaveBeenCalledWith("Longest: 3\nNumber: 8");
	});

	it("Should return the longest and the coincidences for the following input non sorted", () => {
		const spyLog = jest.spyOn(console, "log");
		longestArray([2,1,3,4,5,1,3,2,2,8]);
		expect(spyLog).toHaveBeenCalledWith("Longest: 2\nNumber: 2");
	});

	it("Should return the longest and the coincidences for the following input non sorted with two valid values", () => {
		const spyLog = jest.spyOn(console, "log");
		longestArray([2,1,2,10,10,5,1,3,2,2,8]);
		expect(spyLog).toHaveBeenCalledWith("Longest: 2\nNumber: 10");
	});

	it("Should return the longest and the coincidences for the following input non sorted with two valid and the same values", () => {
		const spyLog = jest.spyOn(console, "log");
		longestArray([2,1,2,4,4,5,1,3,4,4,8]);
		expect(spyLog).toHaveBeenCalledWith("Longest: 2\nNumber: 4");
	});

	it("Should return the longest and the coincidences for the following input when the coincidences are the last elements", () => {
		const spyLog = jest.spyOn(console, "log");
		longestArray([2,1,2,3,1,5,1,3,2,9,9]);
		expect(spyLog).toHaveBeenCalledWith("Longest: 2\nNumber: 9");
	});
});