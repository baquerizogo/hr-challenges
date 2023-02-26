export function caesarCipher(s: string, k: number): string {
	const alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
	const textArr = s.split("");
	
	k = k % alphabet.length;

	const encrypted = textArr.map((e) => {
		const isUpperCase = e == e.toUpperCase();
		const index = alphabet.indexOf(e.toLowerCase());
		const limit = alphabet.length - k;
		let charCrypt = alphabet[index + k];
		
		if(index == -1) return e;
		if(index >= limit) charCrypt = alphabet[index - limit];
		
		return isUpperCase ? charCrypt.toUpperCase() : charCrypt;
	});

	return encrypted.join("");
}