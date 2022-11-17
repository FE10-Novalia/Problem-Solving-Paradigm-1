function binarySearch(array, x) {
    // your code here
    start = 0; end = array.length - 1
    while(start <= end){
        let mid = Math.floor( (start + end) / 2 )
        // console.log(` start : ${start} end : ${end} mid: ${mid}`)
        if(array[mid] === x){
            return mid
        } else if (array[mid] < x) {
            start = mid + 1;
        } else {
        end = mid - 1;
        }
    }
    return -1;
}

module.exports = binarySearch
// console.log(binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 100))
// binarySearch([1, 1, 3, 5, 5, 6, 7], 3) // 2
// binarySearch([1, 2, 3, 5, 6, 8, 10], 5) // 3
// binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 53)  // 6
// binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 100) // -1