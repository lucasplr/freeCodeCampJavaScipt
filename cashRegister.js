function checkCashRegister(price, cash, cid) {
  let newA = [...cid].reverse()
  let rest = cash - price
  let sum = 0
  let change = []
  let status = "OPEN"
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
  for (let i = 0; i < newA.length; i++){
    if (rest >= prices[i][1] )
    sum += newA[i][1]
  }
  if (rest > sum){
    return {status: "INSUFFICIENT_FUNDS", change}
  }
  if( rest === sum) {
    status = "CLOSED"
    return {status, change: cid}
  }
  
  for (let i = 0; i < prices.length; i++){
    let tempo = [prices[i][0], 0]
    while (rest >= prices[i][1] && newA[i][1] > 0){
      tempo[1] += prices[i][1]
      newA[i][1] -= prices[i][1]
      rest -= prices[i][1]
      rest = rest.toFixed(2)
    }
    if (tempo[1] > 0){
      change.push(tempo)
    }
  }
  return {status, change};
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

/*
Finished, i have been trying  and one of the answers do not correspond. So i did a search, and figured out that i need a new var inside the loop, in that case "tempo", that have the elements of the while loop, and when the while loop end, push inside the change array.
Later i will redo, to accomplish a cleaner resolve.
*/