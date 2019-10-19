const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		this.parentNodes.push(node);
		if (!this.root){
			this.root = node;
		} else {
			if (this.parentNodes[0].left == null){
				this.parentNodes[0].left = node;
			} else {
				this.parentNodes[0].right = node;
				this.parentNodes.shift();
			}
		}
	}

	shiftNodeUp(node) {
		if (node.parent){
			let pIndex = this.parentNodes.findIndex((el,index) => {
				if(el.data == node.parent.data && el.priority == node.parent.priority) {
					return index;
				}			
			});
			let nIndex = this.parentNodes.findIndex((el, index) => {
				if (el.data == node.data && el.priority == node.priority) {
					return index;
				}
			});
			if (nIndex >= 0){
				this.parentNodes[nIndex] = node.parent;
			}
			if (pIndex >= 0){
				this.parentNodes[pIndex] = node;
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		} else {
			this.parentNodes.forEach((el) => {
				console.log(el.data);
			});
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
