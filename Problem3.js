function dragonOfLoowater(dragonHead, knightHeight) {
    // your code here
    knightHeight = knightHeight.sort((a,b) => a - b)
    let allDragon = [...dragonHead] , minSum = 0, killer = []
    for(let knight of knightHeight){
        for(let i in allDragon){
            if(knight >= allDragon[i]){
                allDragon.splice(i,1)
                minSum += knight
                killer.push(knight)
            }
        }
    }
    if(killer.length === dragonHead.length){
        return minSum
    }else{
        return 'knight fall'
    }
}


module.exports = dragonOfLoowater
// dragonOfLoowater([5, 4], [7, 8, 4])    // 11
// dragonOfLoowater([5, 10], [5])         // knight fall
// dragonOfLoowater([7, 2], [4, 3, 1, 2]) // knight fall
// dragonOfLoowater([7, 2], [2, 1, 8, 5]) // 10

