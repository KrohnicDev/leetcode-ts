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

  for (let tmp = 1; tmp < n; tmp++) {
    memo[tmp] = wins(memo)(tmp)
  }

  return wins(memo)(n)
}

function wins(memo: (boolean | undefined)[]) {
  return (n: number) => {
    const toNextValue = (x: number): number => n - x
    return (
      memo[n] ??
      xCandidates(n)
        .filter(x => x > 0 && n % x === 0)
        .map(toNextValue)
        .some(wins(memo))
    )
  }
}

function xCandidates(n: number) {
  return Array.from(Array(Math.ceil(Math.sqrt(n))).keys())
}

export { divisorGame }
