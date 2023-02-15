export function birthday(s: number[], d: number, m: number): number {
	if(s.length < 1 || s.length > 100) throw new Error("Array length should be betweeen 1 and 100");
	if(s.some(item => item < 1 || item > 5)) throw new Error("Array elements should be between 1 and 5");
	if(d < 1 || d > 31) throw new Error("Day should be between 1 and 31");
	if(m < 1 || m > 12) throw new Error("Month should be between 1 and 12");

	let segmentCounts = 0;
	const limit = s.length == m ? s.length : s.length - m + 1; 
	
	for(let i = 0; i < limit; i++) {
		let sum = 0;

		for(let j = i; j < i + m; j++) {
			sum += s[j];
		}
        
		if(sum == d) segmentCounts += 1;
	}

	return segmentCounts;
}