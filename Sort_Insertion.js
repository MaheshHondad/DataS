/* Insertion sort is the simple sorting algorithm. In this algorithm, we insert each element onto its
 proper place in the sorted array. This is less efficient than the other sort algorithms
  like quick sort, merge sort, etc.

  Consider an array A whose elements are to be sorted. Initially, A[0] is the only element
   on the sorted set. In pass 1, A[1] is placed at its proper index in the array.

In pass 2, A[2] is placed at its proper index in the array. Likewise, in pass n-1, A[n-1] 
is placed at its proper index into the array.
*/

function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4])