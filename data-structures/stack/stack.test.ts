import Stack from '.';

describe('Stack data structure', () => {
  test('adding to the beginning of the list', () => {
    const stack = new Stack();

    expect(stack.push('hello')).toBe(1);
    expect(stack.push('world')).toBe(2);
    expect(stack.push('how')).toBe(3);
    expect(stack.push('are')).toBe(4);
    expect(stack.push('you')).toBe(5);
    expect(stack.print()).toMatch('\nyou\nare\nhow\nworld\nhello\n');
  });
});
