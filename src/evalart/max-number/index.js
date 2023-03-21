export const maxNumber = (arr) => {
	if(!arr) throw new Error("arr is mandatory");
	if(!Array.isArray(arr)) throw new Error("arr must be type Array");
	
	return Math.max(...arr);
};