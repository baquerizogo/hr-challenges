import { caesarCipher } from ".";

describe("Caesar Cipher", (): void => {
	it("Should return a string", (): void => {
		const res = caesarCipher("s", 1);
		expect(typeof res).toBe("string");
	});

	it("Should return the encrypted text rotated by 2", (): void => {
		const res = caesarCipher("middle-Outz", 2);
		expect(res).toBe("okffng-Qwvb");
	});

	it("Should return the encrypted text rotated by 5", (): void => {
		const res = caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5);
		expect(res).toBe("Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj");
	});

	it("Should return the encrypted text rotated by 4", (): void => {
		const res = caesarCipher("Hello_World!", 4);
		expect(res).toBe("Lipps_Asvph!");
	});

	it("Should return the encrypted text rotated by 87", (): void => {
		const res = caesarCipher("www.abc.xy", 87);
		expect(res).toBe("fff.jkl.gh");
	});
});