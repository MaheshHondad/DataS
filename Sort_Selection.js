/*
In selection sort, the smallest value among the unsorted elements of the array is selected in
 every pass and inserted to its appropriate position into the array.

First, find the smallest element of the array and place it on the first position. 
Then, find the second smallest element of the array and place it on the second position. 
The process continues until we get the sorted array.

The array with n elements is sorted by using n-1 pass of selection sort algorithm.
*/

// ES2015 VERSION
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      }
      if (i !== lowest) swap(arr, i, lowest);
    }
  
    return arr;
  }
  
  selectionSort([0,2,34,22,10,19,17]);
  
  // LEGACY VERSION (non ES2015 syntax)
  function sselectionSort(arr){
      for(var i = 0; i < arr.length; i++){
          var lowest = i;
          for(var j = i+1; j < arr.length; j++){
              if(arr[j] < arr[lowest]){
                  lowest = j;
              }
          }
          if(i !== lowest){
              //SWAP!
              var temp = arr[i];
              arr[i] = arr[lowest];
              arr[lowest] = temp;
          }
      }
      return arr;
  }
  
  
  