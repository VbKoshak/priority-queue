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
		if (this.parentNodes.length > 0) {

		}
	}

	detachRoot() {
		if (this.parentNodes[0] == this.root) {
			this.parentNodes = this.parentNodes.splice(0, 1);
		}
		let res = this.root;
		this.root = null;
		return res;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {

	}

	isEmpty() {

	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		this.parentNodes.push(node);
		if (!this.root) {
			this.root = node;
		} else {
			if (this.parentNodes[0].left == null) {
				this.parentNodes[0].left = node;
			} else {
				this.parentNodes[0].right = node;
				this.parentNodes.shift();
			}
		}
	}

	shiftNodeUp(node) {
		if (node.parent) {
			let pIndex, nIndex;
			let parent = node.parent;
			this.parentNodes.findIndex((el, index) => {
				if (parent.data == el.data && parent.priority == el.priority) {
					pIndex = index;
				}
			});
			this.parentNodes.findIndex((el, index) => {
				if (el.data == node.data && el.priority == node.priority) {
					nIndex = index;
				}
			});
			if (pIndex != undefined && nIndex != undefined) {
				this.parentNodes[pIndex] = node;
				this.parentNodes[nIndex] = node.parent;
			} else if (pIndex != undefined && nIndex == undefined) {
				this.parentNodes[pIndex] = node;
			} else if (pIndex == undefined && nIndex != undefined) {
				this.parentNodes[nIndex] = node.parent;
			}
			if (node.parent == this.root) {
				this.root = node;
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
		if (node.left) {
			let child = node;
			if (!child.right) {
				child = child.left;
			} else {
				child = child.left.priority > child.right.priority ? child.left : child.right;
			}
			if (node == this.root){
				this.root = child;
			}

			let cIndex, nIndex;
			this.parentNodes.findIndex((el, index) => {
				if (child.data == el.data && child.priority == el.priority) {
					cIndex = index;
				}
				if (el.data == node.data && el.priority == node.priority) {
					nIndex = index;
				}
			});
			if (cIndex != undefined && nIndex != undefined) {
				this.parentNodes[cIndex] = node;
				this.parentNodes[nIndex] = child;
			} else if (cIndex != undefined && nIndex == undefined) {
				this.parentNodes[cIndex] = node;
			} else if (cIndex == undefined && nIndex != undefined) {
				this.parentNodes[nIndex] = child;
			}
			child.swapWithParent();
			this.shiftNodeDown(node);
		}
	}
}

module.exports = MaxHeap;