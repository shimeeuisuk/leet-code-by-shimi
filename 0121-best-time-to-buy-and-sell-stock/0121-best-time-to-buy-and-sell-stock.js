/**
 * @param {number[]} prices
 * @return {number}
 */
 // 배열 하나씩 보면서 최저값 갱신 그러면서 최저값보다 크면 이익 계산해서 최고 이익 갱신
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