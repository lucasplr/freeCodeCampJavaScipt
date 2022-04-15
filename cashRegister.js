function checkCashRegister(price, cash, cid) {
  let rest = cash - price
  let sum = 0
  let change = []
  let prices = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ]
  for (let i = 0; i < cid.length; i++){
    if (rest >= cid[i][1])
    sum += cid[i][1]
  }
  if (rest > sum){
    return {status: "INSUFFICIENT_FUNDS", change}
  }
  for (let i = 0; i < prices.length; i++){
    if (rest >= prices[i][1] ){
      return [prices[i][0], rest]
    }
  }
  return change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


/*
To finish later on

*/