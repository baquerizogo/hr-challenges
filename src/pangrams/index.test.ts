import { pangrams } from ".";

describe("Pangrams", (): void => {
	it("Should throw error if string is empty", (): void => {
		expect(() => pangrams("")).toThrow();
	});

	it("Should return pangram for the next input", (): void => {
		const s = "abcdefghijklmnopqrstuvwxyz";
		const res = pangrams(s);
		expect(res).toBe("pangram");
	});

	it("Should return pangram for the next input ignoring cases", (): void => {
		const s = "abcdefGhijklMnopqrStuvwxyz";
		const res = pangrams(s);
		expect(res).toBe("pangram");
	});

	it("Should return pangram for the next input ignoring cases 2", (): void => {
		const s = "The quick brown fox jumps over the lazy dog";
		const res = pangrams(s);
		expect(res).toBe("pangram");
	});

	it("Should return not pangram for the next input ignoring cases 3", (): void => {
		const s = "We promptly judged antique ivory buckles for the prize";
		const res = pangrams(s);
		expect(res).toBe("not pangram");
	});

	it("Should return pangram for the next input ignoring cases 4", (): void => {
		const s = "We promptly judged antique ivory buckles for the next prize";
		const res = pangrams(s);
		expect(res).toBe("pangram");
	});
});