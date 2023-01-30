const leds = [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const result = countTime(leds);
console.log(result);

function countTime(leds) {
	const arrayLeds = leds.join('').split(1);
	arrayLeds[0] += arrayLeds.pop();
	return (
		arrayLeds.reduce((acc, val) => (acc.length > val.length ? acc : val), '')
			.length * 7
	);
}

function countTime(leds) {
	const arrayLeds = leds.join('').split(1);
	arrayLeds[0] += arrayLeds.pop();
	return arrayLeds.sort((a, b) => b.length - a.length)[0].length * 7;
}