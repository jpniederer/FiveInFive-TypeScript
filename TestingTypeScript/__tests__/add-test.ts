import { add, subtract, binarySearch } from '../add';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(11, 7)).toBe(4);
  });
});

describe('binary present', () => {
  it('should return true', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 2)).toBe(true);
  });
});

describe('binary Not present', () => {
  it('should return true', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 9)).toBe(false);
  });
});