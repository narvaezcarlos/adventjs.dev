const giftsCities = [15, 3, 11, 5, 7];
const maxGifts = 8;
const maxCities = 2;
const result = getMaxGifts(giftsCities, maxGifts, maxCities);
console.log(result);

function getMaxGifts(giftsCities, maxGifts, maxCities) {
	const gifts = giftsCities.filter((giftsCity) => {
		return giftsCity <= maxGifts;
	});
	if (gifts.length === 0) {
		return 0;
	}
	if (gifts.length === 1) {
		return gifts[0];
	}
	if (maxCities === 1) {
		return Math.max(...gifts);
	}
	return Math.max(
		...gifts.map((giftsCity, index) => {
			return giftsCity + getMaxGifts(gifts.slice(index + 1), maxGifts - giftsCity, maxCities - 1);
		})
	);
}
