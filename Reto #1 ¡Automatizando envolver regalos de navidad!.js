const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);
console.log(wrapped);

function wrapping(gifts) {
	const giftWrapped = [];
	for (const gift of gifts) {
		giftWrapped.push(
			`${'*'.repeat(gift.length + 2)}\n*${gift}*\n${'*'
				.repeat(gift.length + 2)
				.split('')
				.reverse()
				.join('')}`
		);
	}
	return giftWrapped;
}
