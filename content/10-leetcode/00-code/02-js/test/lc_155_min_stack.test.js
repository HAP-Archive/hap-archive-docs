import { describe, expect, test } from '@jest/globals';
import MinStack from '../src/lc_155_min_stack';

describe('Tests for MinStack', () => {
  test('performs sequence of operations correctly', () => {
    const minStack = new MinStack();
    
    // Test sequence: ["MinStack","push",1,"push",2,"push",0,"getMin","pop","top","getMin"]
    minStack.push(1);
    minStack.push(2);
    minStack.push(0);
    
    // Verify getMin after pushes
    expect(minStack.getMin()).toBe(0);
    
    // Verify pop
    expect(minStack.pop()).toBe(0);
    
    // Verify top after pop
    expect(minStack.top()).toBe(2);
    
    // Verify getMin after operations
    expect(minStack.getMin()).toBe(1);
  });

  test('returns undefined for empty stack operations', () => {
    const minStack = new MinStack();
    
    expect(minStack.pop()).toBeUndefined();
    expect(minStack.top()).toBeUndefined();
    expect(minStack.getMin()).toBeUndefined();
  });

  test('handles duplicate minimum values correctly', () => {
    const minStack = new MinStack();
    
    minStack.push(2);
    minStack.push(2);
    minStack.push(1);
    minStack.push(1);
    
    expect(minStack.getMin()).toBe(1);
    minStack.pop();
    expect(minStack.getMin()).toBe(1);
    minStack.pop();
    expect(minStack.getMin()).toBe(2);
  });
});