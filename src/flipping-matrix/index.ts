export function flippingMatrix(matrix: number[][]): number {
	const matrixSquare = matrix.length / 2;
	let max = 0;
	let total = 0;

	for(let row = 0; row < matrixSquare; row++) {
		for(let col = 0; col < matrixSquare; col++) {
			max = 0;
			max = Math.max(matrix[row][col], max);
			max = Math.max(matrix[row][2 * matrixSquare - col - 1], max);
			max = Math.max(matrix[2 * matrixSquare - row - 1][col], max);
			max = Math.max(matrix[2 * matrixSquare - row - 1][2 * matrixSquare - col - 1], max);
			
			total += max;
		}
	}
    
	return total;
}