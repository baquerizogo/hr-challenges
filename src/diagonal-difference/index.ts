// Given a square matrix, calculate the absolute difference 
// between the sums of its diagonals.

export function diagonalDifference(arr: number[][]): number {
	let ltrDiagonal = 0;
	let rtlDiagonal = 0;
    
	let row = 0;
	let col = arr.length - 1;

	arr.map((col) => {
		if(arr.length != col.length) throw new Error("Input should be a square matrix");
	});

	while (row < arr.length) {
		ltrDiagonal += arr[row][row];
		rtlDiagonal += arr[row][col];
		row++;
		col--;
	}

	return(Math.abs(ltrDiagonal - rtlDiagonal));
}