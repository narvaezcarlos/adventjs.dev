const lastBackup = 1546300800;
const changes = [
	[3, 1546301100],
	[2, 1546300800],
	[1, 1546300800],
	[1, 1546300900],
	[1, 1546301000],
];

const result = getFilesToBackup(lastBackup, changes);
console.log(result);

function getFilesToBackup(lastBackup, changes) {
	return [
		...new Set([
			...changes
				.filter((e) => e[1] > lastBackup)
				.map((e) => e[0])
				.sort((a, b) => a - b),
		]),
	];
}

/* function getFilesToBackup(lastBackup, changes) {
	let arrayResult = [];
	changes.some((e) => {
		if (e[1] > lastBackup) {
			arrayResult.push(e[0]);
		}
	});
	return [...new Set([...arrayResult.sort((a, b) => a - b)])];
} */
