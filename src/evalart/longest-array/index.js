export const longestArray = (myArray) => {    
	let longest = 0;
	let number = 0;

	for(let i = 0; i < myArray.length; i++) {
		let coincidences = 0;
		
		for(let j = i; j < myArray.length; j++) {
			if(myArray[i] == myArray[j]) {
				coincidences++;
			} else {
				break;
			}
		}

		if(coincidences > longest) {
			longest = coincidences;
			number = myArray[i];
		}
	}

	console.log(`Longest: ${longest}\nNumber: ${number}`);

	return;
};