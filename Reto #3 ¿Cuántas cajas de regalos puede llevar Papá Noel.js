const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];
const result = distributeGifts(packOfGifts, reindeers);
console.log(result);

function distributeGifts(packOfGifts, reindeers) {
	const capacities = reindeers.reduce((acc, val) => acc + val.length, 0);
	const pack = packOfGifts.reduce((acc, val) => acc + val.length, 0);
	return Math.trunc((capacities * 2) / pack);
}
