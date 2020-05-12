import Queue from '.';

describe('Queue data structure', () => {
  test('adding to the end of the list', () => {
    const queue = new Queue();

    expect(queue.enqueue('hello')).toBe(1);
    expect(queue.enqueue('world')).toBe(2);
    expect(queue.enqueue('how')).toBe(3);
    expect(queue.enqueue('are')).toBe(4);
    expect(queue.enqueue('you')).toBe(5);
    expect(queue.print()).toMatch('hello world how are you ');
  });

  test('removing from the front of the list', () => {
    const queue = new Queue();

    queue.enqueue('hello');
    queue.enqueue('world');
    queue.enqueue('how');
    queue.enqueue('are');
    queue.enqueue('you');
    expect(queue.dequeue()).toMatch('hello');
    expect(queue.dequeue()).toMatch('world');
    expect(queue.dequeue()).toMatch('how');
    expect(queue.dequeue()).toMatch('are');
    expect(queue.dequeue()).toMatch('you');
    expect(queue.dequeue()).toBe(null);
    expect(queue.print()).toBe(null);
  });
});
