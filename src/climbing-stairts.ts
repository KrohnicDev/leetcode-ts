/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

function climbStairs(n: number): number {
  // Base cases pre-populated
  const results = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    /*
    You can get to any step by taking either one or two steps, 
    so the result is just combining the results of previous two steps together.
    */
    results[i] = results[i - 2] + results[i - 1];
  }

  return results[n];
}

export default climbStairs;
