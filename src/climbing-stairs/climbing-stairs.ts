/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

function climbStairs(n: number): number {
  const ways = [NaN, 1, 2]

  for (let i = 3; i <= n; i++) {
    const back2 = ways[i - 2]
    const back1 = ways[i - 1]
    ways[i] = back2 + back1
  }

  return ways[n]
}

export default climbStairs
