import { minCostClimbingStairs } from './min-cost-climbing-stairs'

test('example 1', () => {
  expect(minCostClimbingStairs([10, 15, 20])).toBe(15)
})

test('example 2', () => {
  const costs = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
  expect(minCostClimbingStairs(costs)).toBe(6)
})
