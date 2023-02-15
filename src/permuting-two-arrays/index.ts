export function twoArrays(k: number, A: number[], B: number[]): string {
	
	if(k < 1 || k > Math.pow(10, 9)) throw new Error("K is not valid");
	if(A.length != B.length) throw new Error("Arrays length should be equal");
	if(A.length < 1 || A.length > 100) throw new Error("Array length should be between 1 and 1000");

	A.sort((a,b) => a-b);
	B.sort((a,b) => b-a);
        
	for (let i = 0; i < A.length; i++) {
		const a = A[i], b = B[i];
		if (a + b < k) return "NO";
	}
        
	return "YES";
}