import { sockMerchant } from ".";

describe("SockMerchand", (): void => {
	it("Should return a number", (): void => {
		const res = sockMerchant(1, [2]);
		expect(typeof res).toBe("number");
	});

	it("Should return 0 if arr has only one item", (): void => {
		const res = sockMerchant(1, [1]);
		expect(res).toBe(0);
	});

	it("Should return 2 for the following input", (): void => {
		const res = sockMerchant(7, [1,2,1,2,1,3,2]);
		expect(res).toBe(2);
	});

	it("Should return 3 for the following input", (): void => {
		const res = sockMerchant(9, [10,20,20,10,10,30,50,10,20]);
		expect(res).toBe(3);
	});

	it("Should return 3 for the following input", (): void => {
		const res = sockMerchant(9, [10,20,20,10,10,30,50,10,20]);
		expect(res).toBe(3);
	});

	it("Should return 4 for the following input", (): void => {
		const res = sockMerchant(10, [1,1,3,1,2,1,3,3,3,3]);
		expect(res).toBe(4);
	});
});