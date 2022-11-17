function simpleEquations(a, b, c) {
    // your code here
    let max = Math.max(a,b,c), output

    for(let x = 1; x <= max; x++){
        for(let y = x + 1; y <= max; y++){
            for(let z = y + 1; y <= max; y++){
                if(x+y+z === a && x*y*z === b && x**2 + y**2 + z**2 === c){
                    output = `${x} ${y} ${z}`
                }
            }
        }
    }
    return output || 'no solution'
}

module.exports = simpleEquations
// simpleEquations(1, 2, 3)  // no solution
// simpleEquations(6, 6, 14) // 1 2 3
