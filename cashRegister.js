function checkCashRegister(price, cash, cid) {
  let rest = cash - price
  let sum = 0
  let change = []
  let status = "OPEN"
  let prices = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]
  for (let i = 0; i < cid.length; i++){
    if (rest >= prices[i][1] )
    sum += cid[i][1]
  }
  if (rest > sum){
    return {status: "INSUFFICIENT_FUNDS", change}
  }
  for (let i = 0; i < prices.length; i++){
    if (rest >= prices[i][1] && cid[i][1] >= rest){
      change.push(prices[i])
      rest -= prices[i][1]
      cid[i][1] -= prices[i][1]
    }
  }
  return {status, change};
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


/*
To finish later on

*/