import BST from '.';

describe('Binary Search Tree', () => {
  test('inserting values', () => {
    const bst = new BST();

    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(6);
    bst.insert(1);
    bst.insert(2);
    bst.insert(5);

    expect(JSON.stringify(bst)).toMatch(
      JSON.stringify({
        root: {
          value: 5,
          left: {
            value: 3,
            left: {
              value: 1,
              right: {
                value: 2,
              },
            },
          },
          right: {
            value: 7,
            left: {
              value: 6,
            },
          },
        },
      })
    );
  });

  test('finding values', () => {
    const bst = new BST();

    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(6);
    bst.insert(1);
    bst.insert(2);

    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(2)).toBe(true);
    expect(bst.contains(1)).toBe(true);
    expect(bst.contains(6)).toBe(true);
    expect(bst.contains(38)).toBe(false);
    expect(bst.contains(-3)).toBe(false);
    expect(bst.contains(0)).toBe(false);
    expect(bst.contains(432)).toBe(false);
  });

  test('get array of values in-order', () => {
    const bst = new BST();

    bst.insert(11);
    bst.insert(13);
    bst.insert(5);
    bst.insert(9);
    bst.insert(10);
    bst.insert(3);

    expect(bst.toArrayInOrder()).toEqual([3, 5, 9, 10, 11, 13]);
  });

  test('get empty array', () => {
    const bst = new BST();

    expect(bst.toArrayInOrder()).toEqual([]);
  });

  test('print values in order', () => {
    const bst = new BST();

    bst.insert(11);
    bst.insert(13);
    bst.insert(5);
    bst.insert(9);
    bst.insert(10);
    bst.insert(3);

    expect(bst.print()).toMatch('3, 5, 9, 10, 11, 13');
  });

  test('print values in breadth-first order', () => {
    const bst = new BST();

    bst.insert(11);
    bst.insert(13);
    bst.insert(5);
    bst.insert(9);
    bst.insert(10);
    bst.insert(3);

    expect(bst.toBFArray()).toEqual([11, 5, 13, 3, 9, 10]);
  });
});
