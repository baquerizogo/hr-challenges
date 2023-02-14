export function pangrams(s: string): string {
	if(s == "") throw new Error("String shouldn't be empty.");
    
	const alphabet: string[] = [
		"a", "b", "c", "d",
		"e", "f", "g", "h",
		"i", "j", "k", "l",
		"m", "n", "o", "p",
		"q", "r", "s", "t",
		"u", "v", "w", "x",
		"y", "z"
	];

	for(let i = 0; i < s.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			if(s[i].toLowerCase() == alphabet[j]) alphabet.splice(j, 1);
		}
	}
	
	return (alphabet.length > 0 ? "not pangram" : "pangram");
}