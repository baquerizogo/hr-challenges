export function maxMin(k: number, arr: number[]): number {
	arr.sort((a, b) => a - b);

	let unfairness = Math.max(...arr);

	for(let i = 0; i < arr.length - k + 1; i++) {
		const tempUnfairness = arr[i+k-1] - arr[i];
		if(tempUnfairness < unfairness) unfairness = tempUnfairness;
	}

	return unfairness || 0;
}