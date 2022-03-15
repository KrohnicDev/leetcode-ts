/*
https://leetcode.com/problems/pascals-triangle-ii/

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
*/

function getRow(rowIndex: number): number[] {
  // Top row has only one cell
  let row = [1]

  for (let i = 1; i <= rowIndex; i++) {
    row = nextRow(row)
  }

  return row
}

function nextRow(prev: number[]): number[] {
  const lastIndex = prev.length - 1

  // Row starts with the same number as the previous
  const row = [prev[0]]

  // Middle cells are calculated from previous row
  for (let i = 0; i < lastIndex; i++) {
    const left = prev[i]
    const right = prev[i + 1]
    row.push(left + right)
  }

  // Row ends with the same number as previous
  row.push(prev[lastIndex])

  return row
}

export { getRow }
