import { towerBreakers } from ".";

describe("Tower Breakers", (): void => {
	it("Should return a number", (): void => {
		const res = towerBreakers(1, 2);
		expect(typeof res).toBe("number");
	});

	it("Should win player 1 for n=1 m=4", (): void => {
		const res = towerBreakers(1, 4);
		expect(res).toBe(1);
	});

	it("Should win player 2 for n=2 m=2", (): void => {
		const res = towerBreakers(2, 2);
		expect(res).toBe(2);
	});
});