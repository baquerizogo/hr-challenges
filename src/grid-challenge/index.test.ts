import { gridChallenge } from ".";

describe("Grid Challenge", (): void => {
	it("Should return YES for the following input 3x3", (): void => {
		const res = gridChallenge(["abc", "ade", "efg"]);
		expect(res).toBe("YES");
	});

	it("Should return YES for the following input 5x5", (): void => {
		const res = gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]);
		expect(res).toBe("YES");
	});

	it("Should return NO for the following input 3x3", (): void => {
		const res = gridChallenge(["mpxz", "abcd", "wlmf"]);
		expect(res).toBe("NO");
	});

	it("Should return YES for the following input 4x3", (): void => {
		const res = gridChallenge(["abc", "hjk", "mpq", "rtv"]);
		expect(res).toBe("YES");
	});
});