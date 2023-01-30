const dry = 2;
const numbers = 20;
const result = dryNumber(dry, numbers);
console.log(result);

function dryNumber(dry, numbers) {
	return Array.from({ length: numbers }, (_, i) => i + 1).filter((val) =>
		String(val).includes(String(dry))
	);
}

/* function dryNumber(dry, numbers) {
	const finalArray = [...Array(numbers + 1).keys()];
	finalArray.shift();
	return finalArray.filter((val) => val.toString().includes(dry.toString()));
}
 */
/* function dryNumber(dry, numbers) {
	let arrayNumber = new Array(numbers).fill('n');
	let arrayResult = [];
	for (let index = 1; index <= arrayNumber.length; index++) {
		if (String(index).includes(String(dry))) {
			arrayResult.push(index);
		}
	}
	return arrayResult;
} */
