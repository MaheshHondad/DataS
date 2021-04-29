/*In Bubble sort, Each element of the array is compared with its adjacent element.
 The algorithm processes the list in passes. A list with n elements requires n-1 passes for sorting.
  Consider an array A of n elements whose elements are to be sorted by using Bubble sort.
   The algorithm processes like following.

In Pass 1, A[0] is compared with A[1], A[1] is compared with A[2], A[2] is compared with A[3] and so on.
 At the end of pass 1, the largest element of the list is placed at the highest index of the list.
In Pass 2, A[0] is compared with A[1], A[1] is compared with A[2] and so on. At the end of Pass 2 
the second largest element of the list is placed at the second highest index of the list.
In pass n-1, A[0] is compared with A[1], A[1] is compared with A[2] and so on. At the end of this pass.
 The smallest element of the list is placed at the first index of the list.
 */

// Optimized BubbleSort with noSwaps 0(n)
function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }
  
  bubbleSort([8,1,2,3,4,5,6,7]);
  
  
  // UNOPTIMIZED VERSION OF BUBBLE SORT
  function bubbleSort(arr){
    for(var i = arr.length; i > 0; i--){
      for(var j = 0; j < i - 1; j++){
        console.log(arr, arr[j], arr[j+1]);
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;         
        }
      }
    }
    return arr;
  }
  
  // ES2015 Version
  function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }
  
  bubbleSort([8,1,2,3,4,5,6,7]);