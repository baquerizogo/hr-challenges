import { convertTo32Bits, flipBinary, flippingBits } from ".";

describe("Flipping bits", (): void => {
	it("should be a function", (): void => {
		expect(typeof flippingBits).toBe("function");
	});

	it("should throw error if n is negative", (): void => {
		expect(() => flippingBits(-1)).toThrow();
	});

	it("should throw error if n is bigger than 2exp32", (): void => {
		expect(() => flippingBits(4294967297)).toThrow();
	});

	it("should return 4294967286 when the input is 9", (): void => {
		const res = flippingBits(9);
		expect(res).toBe(4294967286);
	});

	it("should return 2147483648 when the input is 2147483647", (): void => {
		const res = flippingBits(2147483647);
		expect(res).toBe(2147483648);
	});

	it("should return 4294967294 when the input is 1", (): void => {
		const res = flippingBits(1);
		expect(res).toBe(4294967294);
	});

	it("should return 4294967295 when the input is 0", (): void => {
		const res = flippingBits(0);
		expect(res).toBe(4294967295);
	});
});

describe("convertTo32Bits", (): void => {
	it("should return a 32 character string", (): void => {
		const res = convertTo32Bits(9);
		expect(res.length).toBe(32);
	});

	it("should return 0xxxx1001 when the input is 9", (): void => {
		const res = convertTo32Bits(9);
		expect(res).toBe("00000000000000000000000000001001");
	});
});

describe("flipBinary", (): void => {
	it("should return 1xxxx0110 when the input is 0xxxx1001", (): void => {
		const res = flipBinary("00000000000000000000000000001001");
		expect(res).toBe("11111111111111111111111111110110");
	});
});