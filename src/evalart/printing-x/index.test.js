import { printingX } from ".";

describe("printingX", () => {
	it("Should be a function", () => {
		expect(typeof printingX).toBe("function");
	});

	it("Should console error", () => {
		const spyLog = jest.spyOn(console, "log");
		printingX(0);
		expect(spyLog).toHaveBeenCalledWith("ERROR");
	});

	it("Should print X for n=5", () => {
		const spyLog = jest.spyOn(console, "log");
		printingX(5);
		expect(spyLog).toHaveBeenCalledWith("X___X\n_X_X_\n__X__\n_X_X_\nX___X");
	});

	it("Should print X for n=6", () => {
		const spyLog = jest.spyOn(console, "log");
		printingX(6);
		expect(spyLog).toHaveBeenCalledWith("X____X\n_X__X_\n__XX__\n__XX__\n_X__X_\nX____X");
	});
});