import { generate } from './pascals-triangle'

test('1 -> 1', () => {
  expect(generate(1)).toEqual([[1]])
})

test('5', () => {
  const actual = generate(5)
  const expected = [
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ]
  expect(actual).toEqual(expected)
})
