export function sockMerchant(n: number, ar: number[]): number {
	let pairs = 0;
	
	for(let i=0; i < ar.length; i++) {
		const filteredAr = [];
		let count = 0;

		for(let j=0; j < ar.length; j++) {
			if(ar[i] == ar[j]) { count += 1; continue; }
			filteredAr.push(ar[j]);
		}

		ar = filteredAr;
		i = -1;

		pairs += (count % 2 != 0 ? count-1 : count)/2;
	}

	return pairs;
}