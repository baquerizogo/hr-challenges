import { pageCount } from ".";

describe("Drawing Book", (): void => {
	it("Should return a number", (): void => {
		const res = pageCount(4, 3);
		expect(typeof res).toBe("number");
	});

	it("Should return 0 when the page is the first one", (): void => {
		const res = pageCount(5, 1);
		expect(res).toBe(0);
	});

	it("Should return 1 counting until page 3 when total pages are odd", (): void => {
		const res = pageCount(5, 3);
		expect(res).toBe(1);
	});

	it("Should return 1 counting until page 3 when total pages are even", (): void => {
		const res = pageCount(6, 3);
		expect(res).toBe(1);
	});

	it("Should return 0 reverse-counting until page 4 when total pages are odd", (): void => {
		const res = pageCount(5, 4);
		expect(res).toBe(0);
	});

	it("Should return 1 reverse-counting until page 4 when total pages are even", (): void => {
		const res = pageCount(6, 4);
		expect(res).toBe(1);
	});

	it("Should return 2 reverse-counting until page 3 when total pages are even", (): void => {
		const res = pageCount(10, 6);
		expect(res).toBe(2);
	});

	it("Should return 0 reverse-counting until page 4 when total pages are even", (): void => {
		const res = pageCount(10, 10);
		expect(res).toBe(0);
	});

	it("Should return 2 for the following input", (): void => {
		const res = pageCount(6, 2);
		expect(res).toBe(1);
	});
});