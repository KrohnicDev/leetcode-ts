import { getRow } from './pascals-triangle-ii'

test('3', () => {
  expect(getRow(3)).toEqual([1, 3, 3, 1])
})

test('0', () => {
  expect(getRow(0)).toEqual([1])
})

test('1', () => {
  expect(getRow(1)).toEqual([1, 1])
})
