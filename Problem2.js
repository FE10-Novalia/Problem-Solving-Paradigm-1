function moneyChange(money) {
    // your code here
    let array = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000].reverse()
    let output = []
    for(let pecahan of array){
        while(money > 0 && money >= pecahan){
            output.push(pecahan)
            money -= pecahan
        }
    }

    return output
}

module.exports = moneyChange

// console.log(moneyChange(123))   // [100 20 1 1 1]
// console.log(moneyChange(432))   // [200 200 20 10 1 1]
// console.log(moneyChange(543))   // [500, 20, 20, 1, 1, 1]
// console.log(moneyChange(7752))  // [5000, 2000, 500, 200, 50, 1, 1]
// console.log(moneyChange(15321)) // [10000 5000 200 100 20 1]