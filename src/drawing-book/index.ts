export function pageCount(n: number, p: number): number {
	return Math.floor(p > n/2 ? (n - p)/2 : p/2);
}