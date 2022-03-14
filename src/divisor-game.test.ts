import { divisorGame } from './divisor-game'

test('n = 1 loses because cannot divide by 0', () => {
  expect(divisorGame(1)).toBe(false)
})

test('n = 2 wins because divides by 1 and other player has n = 1 which loses', () => {
  expect(divisorGame(2)).toBe(true)
})

test('n = 3 loses because didides by 1 and other player has n = 2 which wins', () => {
  expect(divisorGame(3)).toBe(false)
})

test('n = 4 wins because divides by 1 and other player has n = 3 which loses', () => {
  expect(divisorGame(4)).toBe(true)
})

test('n = 5 loses because must divide by 1 and other player has n = 4 which wins', () => {
  expect(divisorGame(5)).toBe(false)
})

test('999 is not slow', () => {
  divisorGame(999)
})
