import { dynamicArray } from ".";

describe("DynamicArray", (): void => {
	it("Shoud return [7,3] as answer for the given input", (): void => {
		const res = dynamicArray(2, [[1,0,5],[1,1,7], [1,0,3], [2,1,0], [2,1,1]]);
		expect(res).toEqual([7,3]);
	});
});