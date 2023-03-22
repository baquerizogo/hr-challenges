export const histogramArray = (arr) => {
	if(!arr) throw new Error("arr is mandatory");
	let line = "";

	const max = Math.max(...arr);
	arr.sort((a,b) => a - b);

	for(let i = 1; i <= max; i++) {
		line = line + i + ": ";

		for(let j = 0; j < arr.length; j++) {
			if(i == arr[j]) line = line + "*";
		}

		if(i < max) line = line + "\n";
	}
	
	console.log(line);
	return;
};