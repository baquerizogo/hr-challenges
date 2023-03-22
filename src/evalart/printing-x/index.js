export const printingX = (n) => {
	if(!n || n == 0) console.log("ERROR");
    
	let i;
	let j;
	let line = "";

	for(i = 1, j = n; i <= n; i++, j--) {
		for(let k = 1; k <= n; k++) {
			if(i == k || j == k) {
				line = line + "X";
			} else {
				line = line + "_";
			}
		}

		if(i < n) line = line + "\n";
	}

	console.log(line);

	return;
};