/*
Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

Choosing any x with 0 < x < n and n % x == 0.
Replacing the number n on the chalkboard with n - x.
Also, if a player cannot make a move, they lose the game.

Return true if and only if Alice wins the game, assuming both players play optimally.
*/

function divisorGame(n: number): boolean {
  // pre-populated with base cases
  const memo = [false, false, true, false]
  const canWin = divisorGameMemoized(memo)

  for (let num = 1; num < n; num++) {
    memo[num] = canWin(num)
  }

  return canWin(n)
}

function divisorGameMemoized(memo: boolean[]) {
  return function canWin(n: number): boolean {
    function isFactorOfN(x: number): boolean {
      return n % x === 0
    }

    function toNextValue(x: number): number {
      return n - x
    }

    function cannotWin(num: number): boolean {
      return !canWin(num)
    }

    return (
      memo[n] ??
      candidatesForX(n)
        .filter(isPositive)
        .filter(isFactorOfN)
        .map(toNextValue)
        .some(cannotWin)
    )
  }
}

function isPositive(x: number) {
  return x > 0
}

function candidatesForX(n: number) {
  const maxValueForX = Math.floor(n / 2)
  const range = Array(maxValueForX + 1).keys()
  return Array.from(range)
}

export { divisorGame }
