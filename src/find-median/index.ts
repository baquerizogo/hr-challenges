export function findMedian(arr: number[]): number {
	const length = arr.length;
    
	arr.sort((a,b) => a - b);

	const middle = arr[Math.round(length - 1)/2];
	
	return middle;
}
