import { add } from '../add';

describe('add', () => {
  it('should add two number', () => {
    expect(add(1, 2)).toBe(3);
  });
});