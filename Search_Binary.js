// * Binary search is the search technique which works efficiently on the sorted lists.
// Binary search follows divide and conquer approach in which, the list is divided into two halves and 
// the item is compared with the middle element of the list. If the match is found then,
//  the location of middle element is returned otherwise, we search into either of the halves
//  depending upon the result produced through the match.



// Refactored Version o(log n)
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 13)


//Original Solution
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if(arr[middle] === elem){
//         return middle;
//     }
//     return -1;
// }
