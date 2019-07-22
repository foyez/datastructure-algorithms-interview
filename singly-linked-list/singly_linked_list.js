// piece of data - val
// ref to next node - next
// insertion - O(1)
// removal - O(1) or O(n)
// searching - O(n)
// access - O(n)

class Node {
	constructor (val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor () {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push (val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	// traverse () {
	// 	let current = this.head;

	// 	while (current) {
	// 		console.log(current.val);
	// 		current = current.next;
	// 	}
	// }

	pop () {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift () {
		if (!this.head) return undefined;
		let current = this.head;
		this.head = current.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return current;
	}

	unshift (val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			let current = this.head;
			this.head = newNode;
			this.head.next = current;
			/*
			newNode.next = this.head;
			this.head = newNode;
			*/
		}

		this.length++;
		return this;
	}

	get (index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let current = this.head;

		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	// replace
	set (index, val) {
		const foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert (index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);
		const newNode = new Node(val);
		const prev = this.get(index - 1);
		const temp = prev.next;

		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}

	remove (index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();
		const prev = this.get(index - 1);
		const removedItem = prev.next;
		prev.next = removedItem.next;
		this.length--;
		return removedItem;
	}

	reverse () {
		this.print();
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;

		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}

		this.print();
		return this;
	}

	print () {
		const arr = [];
		let current = this.head;

		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('World');
list.push('!');
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.unshift('New Node'));
// console.log(list.get(-1));
// console.log(list.set(1, 'hi'));
// console.log(list.insert(-1, 'hi'));
// console.log(list.remove(1));
console.log(list.reverse());
