/**
 * @file lc_155_min_stack.js
 * @class MinStack - Stack that supports push, pop, top, and getMin in O(1) time
 */
class MinStack {
    constructor() {
        /**
         * @member {Array} stack - Main stack storage
         * @member {Array} minStack - Stack for minvalues
         * @member {number} topIndex - Pointer to top element (-1 when empty)
         */
        this.stack = [];
        this.minStack = [];
        this.topIndex = -1;
    }

    /**
     * Pushes an element onto the stack
     * @param {number} val - Value to push
     * @return {void}
     */
    push(val) {
        this.topIndex++;
        this.stack[this.topIndex] = val;
        
        // Update minStack
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    /**
     * Removes the element on top of the stack
     * @return {number|undefined} Popped element or undefined if empty
     */
    pop() {
        if (this.topIndex < 0) return undefined;
        
        const popped = this.stack[this.topIndex];
        this.topIndex--;
        
        // Remove from minStack if it was the current minimum
        if (popped === this.getMin()) {
            this.minStack.pop();
        }
        
        return popped;
    }

    /**
     * Gets the top element without removing it
     * @return {number|undefined} Top element or undefined if empty
     */
    top() {
        if (this.topIndex < 0) return undefined;
        return this.stack[this.topIndex];
    }

    /**
     * Retrieves the minimum element in the stack
     * @return {number|undefined} Minimum element or undefined if empty
     */
    getMin() {
        if (this.minStack.length === 0) return undefined;
        return this.minStack[this.minStack.length - 1];
    }
}

export default MinStack;