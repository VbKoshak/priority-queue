const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize ? maxSize : 30;
		this.heap = new MaxHeap;
	}

	push(data, priority) {
		let size = this.heap.size();
		if (size < this.maxSize){
			console.log(size);
			this.heap.push(data,priority);
		} else {
			throw(new Error('max size reached'));
		}
	}

	shift() {
		let size = this.heap.size();
		if (size > 0){
			return this.heap.pop();
		} else {
			throw(new Error('heap is empty'));
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
