let array = [1, 2, 3, 4];

class Queue {
	#myArray;
	constructor(arr) {
		this.#myArray = arr;
	}
	pop_front() {
		console.log("pop");
		return this.#myArray.shift();
	}
	push_back(item) {
		console.log("pushed ", item);
		return this.#myArray.push(item);
	}
	size() {
		return this.#myArray.length;
	}
	//TODO : overwrite default toString()
	toStr() {
		return "Queue < " + this.#myArray + " >";
	}
}

Queue.prototype.toString = function () {
	return this.toStr();
};

let queue = new Queue(array);

console.log("" + queue);

queue.pop_front();

console.log("" + queue);

queue.push_back(55);
queue.push_back(100);

console.log("" + queue);
console.log(queue.size());

class Stack {
	#myArray;
	constructor(arr) {
		this.#myArray = arr;
	}
	pop() {
		console.log("pop");
		return this.#myArray.pop();
	}
	push(item) {
		console.log("pushed ", item);
		return this.#myArray.push(item);
	}
	size() {
		return this.#myArray.length;
	}
	//TODO : overwrite default toString()
	toStr() {
		return "Stack < " + this.#myArray + " >";
	}
}

Stack.prototype.toString = function () {
	return this.toStr();
};

let stack = new Stack(array);

console.log("" + stack);

stack.pop();

console.log("" + stack);

stack.push(55);

stack.push(100);

console.log("" + stack);

console.log(stack.size());
