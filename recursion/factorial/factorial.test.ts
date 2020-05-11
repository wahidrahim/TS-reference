import factorial from '.';

describe('factorial()', () => {
  test('1! = 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('2! = 2', () => {
    expect(factorial(2)).toBe(2);
  });

  test('3! = 6', () => {
    expect(factorial(3)).toBe(6);
  });

  test('11! = 39916800', () => {
    expect(factorial(11)).toBe(39916800);
  });
});
