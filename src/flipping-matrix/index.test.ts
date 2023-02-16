import { flippingMatrix } from ".";

describe("Flipping Matrix", (): void => {
	it("Should return 0", (): void => {
		const res = flippingMatrix([[1],[2]]);
		expect(typeof res).toBe("number");
	});

	it("Should return 414 for the following matrix", (): void => {
		const res = flippingMatrix([[112,42,83,119], [56,125,56,49], [15,78,101,43], [62,98,114,108]]);
		expect(res).toBe(414);
	});
});