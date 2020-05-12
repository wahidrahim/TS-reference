import Stack from '.';

describe('Stack data structure', () => {
  test('adding to the beginning of the list', () => {
    const stack = new Stack();

    expect(stack.push('hello')).toBe(1);
  });
});
