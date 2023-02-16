import { findMedian } from ".";

describe("Find Median", (): void => {
	it("Should return 0", (): void => {
		const res = findMedian([1]);
		expect(typeof res).toBe("number");
	});

	it("Should return 3 for the following input", (): void => {
		const res = findMedian([0,1,2,4,6,5,3]);
		expect(res).toBe(3);
	});
});