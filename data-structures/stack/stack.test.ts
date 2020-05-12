import Stack from '.';

describe('Stack data structure', () => {
  test('adding to the top of the list', () => {
    const stack = new Stack();

    expect(stack.push('hello')).toBe(1);
    expect(stack.push('world')).toBe(2);
    expect(stack.push('how')).toBe(3);
    expect(stack.push('are')).toBe(4);
    expect(stack.push('you')).toBe(5);
    expect(stack.print()).toMatch('\nyou\nare\nhow\nworld\nhello\n');
  });

  test('remove from the top of the list', () => {
    const stack = new Stack();

    stack.push('hello');
    stack.push('world');
    stack.push('how');
    stack.push('are');
    stack.push('you');
    expect(stack.pop()).toMatch('you');
    expect(stack.pop()).toMatch('are');
    expect(stack.pop()).toMatch('how');
    expect(stack.pop()).toMatch('world');
    expect(stack.pop()).toMatch('hello');
    expect(stack.pop()).toBe(null);
    expect(stack.print()).toBe(null);
  });
});
