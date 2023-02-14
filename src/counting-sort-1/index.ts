export function countingSort(arr: number[]): number[] {
	const less100 = arr.length < 100;
	const greater10exp6 = arr.length > Math.pow(10, 6);

	if(less100 || greater10exp6) throw new Error("Array length should be between 100 and 10exp6.");
    
	const result = createArray(100, 0) as number[];
	arr.map((item) => { result[item] += 1; });

	return result;
}

export function createArray(length: number, defaultValue: unknown): unknown[] {
	return Array.from({ length }, () => defaultValue);
}