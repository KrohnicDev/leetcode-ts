/* 
You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
Return the maximum number of points you can earn by applying the above operation some number of times.
*/

function deleteAndEarn(nums: number[]): number {
  type NumberMap = {
    [key: number]: number;
  };

  const pointsPerNum: NumberMap = {};
  let maxValue = 0;

  for (const n of nums) {
    if (!pointsPerNum[n]) {
      pointsPerNum[n] = 0;
    }

    pointsPerNum[n] += n;
    maxValue = Math.max(n, maxValue);
  }

  const maxPoints: NumberMap = {};

  for (let n = 0; n <= maxValue; n++) {
    let max = 0;
    const curr = pointsPerNum[n] ?? 0;
    const back1 = maxPoints[n - 1] ?? 0;
    const back2 = maxPoints[n - 2] ?? 0;

    if (n === 1) {
      max = curr;
    } else if (n === 2) {
      max = Math.max(curr, back1);
    } else {
      max = Math.max(curr + back2, back1);
    }

    maxPoints[n] = max;
  }

  return maxPoints[maxValue];
}

export default deleteAndEarn;
