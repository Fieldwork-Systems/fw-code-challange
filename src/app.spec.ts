import {
  anagrams,
  AppRunner,
  fizzBuzz,
  formatName,
  sortAndDedupArratOfNumberStrings,
  sortArrayOfStrings,
} from './app';

test('Base test - nothing to do here', () => {
  expect(1).toBe(1);
});

test('Grouping Anagrams', () => {
  expect(
    AppRunner(
      () => ['abc', 'fun', 'bac', 'fun', 'cba', 'unf', 'hello'],
      anagrams
    )
  ).toEqual([['abc', 'bac', 'cba'], ['fun', 'unf'], ['hello']]);
});

test('Sorting strings', () => {
  expect(
    AppRunner(
      () => ['abc', 'fun', 'bac', 'fun', 'cba', 'unf', 'hello'],
      sortArrayOfStrings
    )
  ).toEqual(['abc', 'bac', 'cba', 'fun', 'fun', 'hello', 'unf']);
});

test('Capitlize name', () => {
  expect(
    AppRunner(
      () => ['DOMiNIc calvert-LeWin', `shane mcdonald o'hanley`],
      formatName
    )
  ).toEqual(['Dominic Calvert-Lewin', `Shane McDonald O'Hanley`]);
});

test('Distinct numbers and order', () => {
  expect(
    AppRunner(
      () => ['4', '99', '3', '3', '4', '1', '2'],
      sortAndDedupArratOfNumberStrings
    )
  ).toEqual([1, 2, 3, 4, 99]);
});

test('Fizz Buzz', () => {
  expect(
    AppRunner(
      () => [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
      ],
      fizzBuzz
    )
  ).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
    16,
  ]);
});
