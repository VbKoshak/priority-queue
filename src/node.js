class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (!this.left) {
			this.left = node;
			this.left.parent = this;
		} else if (!this.right) {
			this.right = node;
			this.right.parent = this;
		}
	}

	removeChild(node) {
		if (node == this.left) {
			this.left.parent = null;
			this.left = null;
		} else if (node == this.right) {
			this.right.parent = null;
			this.right = null;
		} else {
			throw (new Error("No such children"));
		}
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	show(){
		return ("data: " + this.data + "\npriority: " + this.priority + "\nparentData: " + ((this.parent) ? "yes" : "nope"));
	}

	swapWithParent() {
		console.log("\nThis\n" + this.show() + "\nParent\n" + this.parent.show());
		if (this.parent) {
			let parent = this.parent;
			let parentNodes = [this.parent.left, this.parent.right];
			let childNodes = [this.left, this.right];

			if (this.parent.parent) {
				this.parent = parent.parent;
				if (this.parent.left == parent) {
					this.parent.left = this;
				} else {
					this.parent.right = this;
				}
			} else {
				this.parent = null;
			}

			parent.left = childNodes[0];
			if (parent.left) {
				parent.left.parent = parent;
			}
			parent.right = childNodes[1];
			if (parent.right) {
				parent.right.parent = parent;
			}

			parent.parent = this;
			if (parentNodes[0] == this) {
				this.left = parent;
				this.right = parentNodes[1];
				if (this.right) {
					this.right.parent = this;
				}
			} else {
				this.right = parent;
				this.left = parentNodes[0];
				if (this.left) {
					this.left.parent = this;
				}
			}

		}
	}
}

module.exports = Node;