/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER
    let profit = 0 
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price
        }else {
            profit = Math.max(profit, price-minPrice)
        }
    }

    return profit
};