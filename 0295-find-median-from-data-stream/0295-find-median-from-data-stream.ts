class Heap {
    data: number[];
    compare: (a: number, b: number) => boolean;

    constructor(compare: (a: number, b: number) => boolean) {
        this.data = [];
        this.compare = compare;
    }

    size(): number {
        return this.data.length;
    }

    peek(): number {
        return this.data[0];
    }

    push(val: number): void {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    }

    pop(): number {
        const top = this.data[0];
        const end = this.data.pop();
        if (this.data.length > 0 && end !== undefined) {
            this.data[0] = end;
            this.bubbleDown(0);
        }
        return top;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.compare(this.data[index], this.data[parent])) {
                [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
                index = parent;
            } else break;
        }
    }

    private bubbleDown(index: number): void {
        const length = this.data.length;
        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let candidate = index;

            if (left < length && this.compare(this.data[left], this.data[candidate])) {
                candidate = left;
            }

            if (right < length && this.compare(this.data[right], this.data[candidate])) {
                candidate = right;
            }

            if (candidate === index) break;

            [this.data[index], this.data[candidate]] = [this.data[candidate], this.data[index]];
            index = candidate;
        }
    }
}

class MedianFinder {
    private left: Heap;  // Max Heap
    private right: Heap; // Min Heap

    constructor() {
        this.left = new Heap((a, b) => a > b); // Max Heap
        this.right = new Heap((a, b) => a < b); // Min Heap
    }

    addNum(num: number): void {
        this.left.push(num);

        // Ensure every left item <= every right item
        this.right.push(this.left.pop());

        // Balance the sizes
        if (this.left.size() < this.right.size()) {
            this.left.push(this.right.pop());
        }
    }

    findMedian(): number {
        if (this.left.size() > this.right.size()) {
            return this.left.peek();
        } else {
            return (this.left.peek() + this.right.peek()) / 2;
        }
    }
}
