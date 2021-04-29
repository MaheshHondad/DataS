/*
Merge sort is the algorithm which follows divide and conquer approach.
 Consider an array A of n number of elements. The algorithm processes the elements in 3 steps.

If A Contains 0 or 1 elements then it is already sorted, otherwise, Divide A into two sub-array of
 equal number of elements.
Conquer means sort the two sub-arrays recursively using the merge sort.
Combine the sub-arrays to form a single final sorted array maintaining the ordering of the array.
The main idea behind merge sort is that, the short list takes less time to be sorted.

Break up the arrays into halves untill you have an arrays that are empty or have one element
Once you have smaller sorted arrays merge those arrays with other sorted arrays untill you are back
 at the full length of array 
 once the array has been merged back together, return merged and sorted array
 o (nlogn)
*/

// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10,24,76,73])
