/*
https://leetcode.com/problems/min-cost-climbing-stairs/

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
*/

function minCostClimbingStairs(cost: number[]): number {
  const length = cost.length
  const minCosts = [cost[0], cost[1]]

  for (let i = 2; i < length; i++) {
    const back2 = minCosts[i - 2]
    const back1 = minCosts[i - 1]
    minCosts[i] = cost[i] + Math.min(back2, back1)
  }

  const oneFromTop = minCosts[length - 1]
  const twoFromTop = minCosts[length - 2]
  return Math.min(oneFromTop, twoFromTop)
}

export { minCostClimbingStairs }
