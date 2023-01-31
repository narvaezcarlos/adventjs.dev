const dry = 1;
const numbers = 15;
const result = dryNumber(dry, numbers);
console.log(result);

function dryNumber(dry, numbers) {
	const arrayNUmber = [];
  for (let index = dry; index <= numbers; index++) {
    console.log(String(index));
		if (String(index).includes(String(dry))) {
			arrayNUmber.push(index);
			console.log(index);
		} 
	}
	return arrayNUmber;
}
