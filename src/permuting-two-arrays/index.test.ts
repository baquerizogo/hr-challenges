import { twoArrays } from ".";

describe("Two arrays", (): void => {
	it("Should throw error if K is less than 1 and greater than 10exp9", (): void => {
		expect(() => twoArrays(0, [1], [1])).toThrow();
	});

	it("Should throw error if array lengths are different", (): void => {
		expect(() => twoArrays(1, [1, 2], [1])).toThrow();
	});

	it("Should throw error if array length are less than 1 and greater than 1000", (): void => {
		expect(() => twoArrays(1, [], [])).toThrow();
	});

	it("Should return YES for the following input", (): void => {
		const res = twoArrays(10, [2,1,3], [7,8,9]);
		expect(res).toBe("YES");
	});

	it("Should return NO for the following input", (): void => {
		const res = twoArrays(5, [1,2,2,1], [3,3,3,4]);
		expect(res).toBe("NO");
	});

	it("Should return NO for the following input", (): void => {
		const res = twoArrays(10, [7,6,8,4,2], [5,2,6,3,1]);
		expect(res).toBe("NO");
	});

	it("Should return YES for the following input", (): void => {
		const res = twoArrays(4, [1,3], [3,1]);
		expect(res).toBe("YES");
	});

	it("Should return YES for the following input", (): void => {
		const res = twoArrays(4, [4,4,3,2,1,4,4,3,2,4], [2,3,0,1,1,3,1,0,0,2]);
		expect(res).toBe("YES");
	});
});