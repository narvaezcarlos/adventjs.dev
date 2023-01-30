const toys = ['ball', 'doll', 'car', 'puzzle'];
const positions = [2, 3, 1, 0];
const result = sortToys(toys, positions);
console.log(result);

function sortToys(toys, positions) {
	if (toys.length !== positions.length) {
		return [];
	}
	return toys.sort((a, b) => {
		return positions[toys.indexOf(a)] - positions[toys.indexOf(b)];
	});
}

/* function sortToys(toys, positions) {
	if (toys.length !== positions.length) {
		return [];
	}
  let array1 = [];
  let array2 = [];
	for (let index = 0; index < toys.length; index++) {
		array1.push({ toy: toys[index], index: positions[index] });
	}
	array1.sort((a, b) => {
		return a.index < b.index ? -1 : 1;
  });
  for (let index = 0; index < array1.length; index++) {
		array2.push(array1[index].toy);
	}
	return array2;
} */
