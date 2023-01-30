const year = 2022;
const holidays = ['01/06', '04/01', '12/25'];
const totalHours = countHours(year, holidays);
console.log(totalHours);

function countHours(year, holidays) {
	let hours = 0;
	for (const holiday of holidays) {
		const currentDay = new Date(`${holiday}/${year}`);
		if (currentDay.getDay() !== 0 && currentDay.getDay() !== 6) {
			hours += 2;
		}
	}
	return hours;
}
