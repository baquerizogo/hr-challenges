export function lonelyinteger(a: number[]): number {
	let lonely = 0;
    
	a.map((item, index) => {
		let isUnique = true;
		a.map((aux, auxIndex) => {
			if(item == aux && index != auxIndex) isUnique = false;
		});
        
		if(isUnique) lonely = item;
	});
    
	return lonely;
}