/**
 * https://leetcode.com/problems/divisor-game/
 *
 * Alice and Bob take turns playing a game, with Alice starting first.
 *
 * Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:
 *
 * Choosing any x with 0 < x < n and n % x == 0.
 * Replacing the number n on the chalkboard with n - x.
 * Also, if a player cannot make a move, they lose the game.
 *
 * Return true if and only if Alice wins the game, assuming both players play optimally.
 */
function divisorGame(n: number): boolean {
  const memo: boolean[] = []
  const isWinning = divisorGameMemoized(memo)

  range(n).forEach(num => {
    memo[num] = isWinning(num)
  })

  return memo[n]
}

function divisorGameMemoized(memo: boolean[]) {
  function isWinning(n: number): boolean {
    return memo[n] ?? calculateWinningChance(n)
  }

  function calculateWinningChance(n: number): boolean {
    function canBePlayed(x: number) {
      return isPositive(x) && isFactorOfN(x)
    }

    function isFactorOfN(x: number): boolean {
      return n % x === 0
    }

    function nextValue(x: number): number {
      return n - x
    }

    function isLosing(n: number): boolean {
      return !isWinning(n)
    }

    return candidatesForPlaying(n)
      .filter(canBePlayed)
      .map(nextValue)
      .some(isLosing)
  }

  return isWinning
}

function isPositive(x: number) {
  return x > 0
}

function candidatesForPlaying(n: number) {
  const maxPlayableValue = Math.floor(n / 2)
  return range(maxPlayableValue)
}

function range(maxValue: number) {
  const iterator = Array(maxValue + 1).keys()
  return Array.from(iterator).slice(1)
}

export { divisorGame }
