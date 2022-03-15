/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * https://leetcode.com/problems/pascals-triangle/
 *
 * @param numRows
 * @returns
 */
function generate(numRows: number): number[][] {
  const pascalsTriangle: number[][] = [[1]]

  for (let i = 1; i < numRows; i++) {
    pascalsTriangle[i] = nextRow(pascalsTriangle[i - 1])
  }

  return pascalsTriangle
}

function nextRow(prev: number[]): number[] {
  const prevLength = prev.length
  const lastIndex = prevLength - 1
  const row = [prev[0]]

  for (let i = 0; i < lastIndex; i++) {
    const left = prev[i]
    const right = prev[i + 1]
    row.push(left + right)
  }

  row.push(prev[lastIndex])
  return row
}

export { generate }
