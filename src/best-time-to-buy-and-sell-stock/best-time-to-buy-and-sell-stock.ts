/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

function maxProfit(prices: number[]): number {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxPrice = 0;
  let maxProfit = 0;

  for (let day = 0; day < prices.length; day++) {
    const price = prices[day];

    if (price < minPrice) {
      minPrice = price;
      maxPrice = 0;
    } else if (price > maxPrice) {
      maxPrice = price;
      maxProfit = Math.max(price - minPrice, maxProfit);
    }
  }

  return maxProfit;
}

export default maxProfit;
