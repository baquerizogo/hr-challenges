import { maxMin } from ".";

describe("Max Min", (): void => {
	it("Should return a number", (): void => {
		const res = maxMin(4, []);
		expect(typeof res).toBe("number");
	});

	it("Should return 3 as minimum unfairness for the following input", (): void => {
		const res = maxMin(4, [1,2,3,4,10,20,30,40,100,200]);
		expect(res).toBe(3);
	});

	it("Should return 0 as minimum unfairness for the following input", (): void => {
		const res = maxMin(2, [1,2,1,2,1]);
		expect(res).toBe(0);
	});

	it("Should return 20 as minimum unfairness for the following input", (): void => {
		const res = maxMin(3, [10,100,300,200,1000,20,30]);
		expect(res).toBe(20);
	});

	it("Should return 816 as minimum unfairness for the following input", (): void => {
		const res = maxMin(8, [6327,571,6599,479,7897,9322,4518,571,6677,7432,815,6920,4329,4104,7775,5708,7991,5802,8619,6053,7539,7454,9000,3267,6343,7165,4095,439,5621,4095,153,1948,1018,6752,8779,5267,2426,9649,2190,9103,7081,3006,2376,7762,3462,151,3471,1453,2305,8442]);
		expect(res).toBe(816);
	});

	it("Should return 1 as minimum unfairness for the following input", (): void => {
		const res = maxMin(3, [1,2,3,40,41,41,42,44,48]);
		expect(res).toBe(1);
	});

	it("Should return 2 as minimum unfairness for the following input", (): void => {
		const res = maxMin(3, [1,2,5,40,41,49,50,51,52]);
		expect(res).toBe(2);
	});

	it("Should return 2 as minimum unfairness for the following input", (): void => {
		const res = maxMin(3, [100,200,300,350,400,401,402]);
		expect(res).toBe(2);
	});
});