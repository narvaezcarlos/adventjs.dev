const boxes = [
	{ l: 1, w: 1, h: 1 },
	{ l: 2, w: 2, h: 2 },
];
const result = fitsInOneBox(boxes);
console.log('result', result);

function fitsInOneBox(boxes) {
	boxes.sort((a, b) => {
		return a.l + a.w + a.h < b.l + b.w + b.h ? -1 : 1;
	});
	const flag = boxes.reduce((acc, val) => {
		if (acc.l < val.l && acc.w < val.w && acc.h < val.h) {
			return val;
		} else {
			return false;
		}
	});
	return flag !== false ? true : false;
}

/* function fitsInOneBox(boxes) {
	boxes.sort((a, b) => {
		const flag = a.l + a.w + a.h < b.l + b.w + b.h ? -1 : 1;
		return flag;
	});
	for (let index = 1; index < boxes.length; index++) {
		const boxAnt = boxes[index - 1];
		const box = boxes[index];
		if (boxAnt.l >= box.l || boxAnt.w >= box.w || boxAnt.h >= box.h) {
			return false;
		}
	}
	return true;
} */

/* function fitsInOneBox(boxes) {
	boxes.sort((a, b) => {
		if (a.l + a.w + a.h < b.l + b.w + b.h) {
			return -1;
		}
		if (a.l + a.w + a.h > b.l + b.w + b.h) {
			return 1;
		}
		return 0;
	});
	const flag = boxes.reduce((acc, val) => {
		if (acc.l < val.l && acc.w < val.w && acc.h < val.h) {
			return val;
		} else {
			return false;
		}
	});
	return flag !== false ? true : false;
} */

/* function fitsInOneBox(boxes) {
	let bigBox = boxes[0];
	let index = 0;
	for (let i = 1; i < boxes.length; i++) {
		if (boxes[i].l + boxes[i].w + boxes[i].h > bigBox.l + bigBox.w + bigBox.h) {
			bigBox = boxes[i];
			index = i;
		}
	}
	boxes.splice(index, 1);
	for (let i = 0; i < boxes.length; i++) {
		if (boxes[i].l >= bigBox.l || boxes[i].w >= bigBox.w || boxes[i].h >= bigBox.h) {
			return false;
		}
	}
	return true;
} */
