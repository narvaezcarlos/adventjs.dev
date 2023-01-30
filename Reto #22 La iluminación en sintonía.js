const systemNames = [
	'house',
	'house',
	'tree_1',
	'tree_1',
	'house',
	'tree_2',
	'tree_2',
	'tree_3',
];
const stepNumbers = [1, 2, 1, 2, 3, 4, 5, 6];
const result = checkStepNumbers(systemNames, stepNumbers);
console.log(result);

function checkStepNumbers(systemNames, stepNumbers) {
	return Object.values(
		systemNames.reduce((acc, curr, i) => {
			acc[curr] = acc[curr] || [];
			acc[curr].push(stepNumbers[i]);
			return acc;
		}, {})
	).every((arr) => arr.every((e, i, a) => i === 0 || e >= a[i - 1]));
}

/* function checkStepNumbers(systemNames, stepNumbers) {
	let tempArray = {};
	let isSorted = true;
	tempArray = Object.values(
		systemNames.map((e, i) =>
			tempArray[e]
				? tempArray[e].push(stepNumbers[i])
				: (tempArray[e] = [stepNumbers[i]])
		)
	);
	for (let index = 0; index < tempArray.length; index++) {
		const element = tempArray[index];
		isSorted = (() => {
			const length = element.length;
			if (length <= 1) return true;
			let l = 0;
			let r = length - 1;
			for (; l < r; ) {
				if (element[l] > element[l + 1] || element[r] < element[r - 1])
					return false;
				l++;
				r--;
			}
			return true;
		})();
		if (!isSorted) {
			return isSorted;
		}
	}
	return isSorted;
} */
/* function checkStepNumbers(systemNames, stepNumbers) {
	let hashMap = new Map();
	return systemNames.every(
		(name, i, flag, value) => (
			(value = hashMap.get(name)),
			(flag = !!(!value && hashMap.set(name, [stepNumbers[i]]))),
			!flag &&
				((flag = value.at(-1) < stepNumbers[i]), flag) &&
				value.push(stepNumbers[i]),
			flag
		)
	);
} */
/* function checkStepNumbers(systemNames, stepNumbers) {
	let arrayTemp = {};
	let flag = true;
	for (let index = 0; index < systemNames.length; index++) {
		const element = systemNames[index];
		if (arrayTemp[element]) {
			arrayTemp[element].push(stepNumbers[index]);
		} else {
			arrayTemp[element] = [stepNumbers[index]];
		}
	}
	var isSorted = true;
	const tempArray = Object.values(arrayTemp);
	for (let index = 0; index < tempArray.length; index++) {
		const element = tempArray[index];
		isSorted = (() => {
			const length = element.length;
			if (length <= 1) return true;
			let l = 0;
			let r = length - 1;
			for (; l < r; ) {
				if (element[l] > element[l + 1] || element[r] < element[r - 1])
					return false;
				l++;
				r--;
			}
			return true;
		})();
		if (!isSorted) {
			return isSorted;
		}
	}
	return isSorted;
} */
/* function checkStepNumbers(systemNames, stepNumbers) {
	let arrayTemp = {};
	let flag = true;
	for (let index = 0; index < systemNames.length; index++) {
		const element = systemNames[index];
		if (arrayTemp[element]) {
			arrayTemp[element].push(stepNumbers[index]);
		} else {
			arrayTemp[element] = [stepNumbers[index]];
		}
	}
	const isSorted = (a) => {
		const length = a.length;
		if (length <= 1) return true;
		let l = 0;
		let r = length - 1;
		for (; l < r; ) {
			if (a[l] > a[l + 1] || a[r] < a[r - 1]) return false;
			l++;
			r--;
		}
		return true;
	};
	const tempArray = Object.values(arrayTemp);
	for (let index = 0; index < tempArray.length; index++) {
		const element = tempArray[index];
		if (isSorted(element) == false) {
			flag = false;
			break;
		}
	}
	return flag;
} */
