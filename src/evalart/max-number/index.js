export const maxNumber = (arr) => {
	if(!arr) throw new Error("arr is mandatory");
	if(!Array.isArray(arr)) throw new Error("arr must be type Array");
	
	return Math.max(...arr);
};

export const maxNumber2 = (arr) => {
	let max = 0;

	if(!arr) throw new Error("arr is mandatory");
	if(!Array.isArray(arr)) throw new Error("arr must be type Array");

	arr.map(e => {
		if(e > max) max = e;
	});

	return max;
};