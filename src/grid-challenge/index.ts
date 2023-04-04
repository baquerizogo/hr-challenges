export function gridChallenge(grid: string[]): string {
	const sortedGrid: string[][] = [];
    
	grid.map((str) => {
		sortedGrid.push(str.split("").sort());
	});
    
	const rowLength = grid.length;
	const colLength = sortedGrid[0].length;
    
	for(let i = 0; i < colLength; i++) {
		let aux = "a";

		for(let j = 0; j < rowLength; j++) {
			if(sortedGrid[j][i] >= aux) {
				aux = sortedGrid[j][i];
				continue;
			}
            
			return "NO";
		}
	}

	return "YES";
}