import BST from '.';

describe('Binary Search Tree', () => {
  test('Inserting values', () => {
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
});
