/**
 * Creates a new array based in length and a default value
 * Keywords: create array, populate array
 * 
 * @param length - Length of the new array
 * @param defaultValue - Value to populate the new array by default
 * @returns - New array
 */

export function createArray(length: number, defaultValue: unknown): unknown[] {
	return Array.from({ length }, () => defaultValue);
}