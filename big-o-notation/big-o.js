const nemo = [ 'nemo' ];
const everyone = [
	'dory',
	'bruce',
	'marlin',
	'nemo',
	'gill',
	'bloat',
	'nigel',
	'squirt',
	'darla',
	'hank'
];
const large = new Array(1000).fill('nemo');

function findNemo (array) {
	// let t0 = performance.now();
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 'nemo') {
			console.log('Found Nemo!');
		}
	}
	// let t1 = performance.now();
	// console.log('Call to find Nemo took: ' + (t1 - t0) + ' milliseconds');
}

findNemo(nemo); // O(n) --> Linear Time

/* O(1) --> CONSTANT TIME */
const boxes = [ 0, 1, 2, 3, 4, 5 ];

const logFirstTwoBoxes = (boxes) => {
	console.log(boxes[0]); // O(1)
	console.log(boxes[1]); // O(1)
};

logFirstTwoBoxes(boxes); // O(2)
