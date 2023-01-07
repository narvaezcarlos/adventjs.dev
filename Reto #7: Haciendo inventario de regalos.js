const a1 = ['bici', 'coche', 'bici', 'bici'];
const a2 = ['coche', 'bici', 'muñeca', 'coche'];
const a3 = ['bici', 'pc', 'pc'];
const result = getGiftsToRefill(a1, a2, a3);
console.log(result);

function getGiftsToRefill(a1, a2, a3) {
	const arraysFilter = [...new Set([...a1, ...a2, ...a3])];
	const arrayResult = arraysFilter.filter((gift) => {
		return a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1;
	});
	return arrayResult;
}

/* function getGiftsToRefill(a1, a2, a3) {
	let missingGifts = [];
	const arrayFilter = (array) => {
		return [...new Set(array)];
	};
	const a1Filter = arrayFilter(a1);
	const a2Filter = arrayFilter(a2);
	const a3Filter = arrayFilter(a3);
	const missingGift = (param1, param2, param3) => {
		return param1.some((item) => {
			if (!param2.includes(item) && !param3.includes(item)) {
				missingGifts.push(item);
			}
		});
	};
	missingGift(a1Filter, a2Filter, a3Filter);
	missingGift(a2Filter, a1Filter, a3Filter);
	missingGift(a3Filter, a1Filter, a2Filter);

	return missingGifts;
} */
