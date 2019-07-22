const hash = (key, len) => {
	let total = 0;
	for (let char of key) {
		// map "a" to 1, "b" to 2, etc
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % len;
	}
	return total;
};

// console.log(hash('pink', 10));
// console.log(hash('cyan', 10));

// used length in prime number reduced # of collisions
const improvedHash = (key, len) => {
	let total = 0;
	let WEIRD_PRIME = 31;

	for (let i = 0; i < Math.min(key.len, 100); i++) {
		let char = key[i];
		let value = char.charCodeAt(0) - 96;
		total = (total * WEIRD_PRIME + value) % len;
	}
	return total;
};

console.log(improvedHash('pink', 13));
console.log(improvedHash('cyan', 13));
