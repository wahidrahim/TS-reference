import Stack from '.'

describe('Stack data structure', () => {
  test('adding to the beginning of the list', () => {
    const stack = new Stack();

    stack.push('hello');
    expect(stack.print()).toMatch('hello');
  });
});