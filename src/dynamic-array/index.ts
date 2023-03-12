import { createArray } from "../../utils/createArray";

/**
 * Dynamic Array exercise
 * 
 * @param n
 * @param queries 
 * @returns 
 */

export function dynamicArray(n: number, queries: number[][]): number[] {
	const arr = createArray(n, []) as number[][];
	const answersArray: number[] = [];
	let lastAnswer = 0;

	queries.map((query, index) => {
		const type = query[0];
		const x = query[1];
		const y = query[2]; 
		const idx = ((x ^ lastAnswer) % n);

		if(type == 1) {
			arr[idx] = [...arr[idx], y];
		}

		if(type == 2) {
			lastAnswer = arr[idx][y % arr[idx].length];
			answersArray.push(lastAnswer);
		}
	});

	return answersArray;
}