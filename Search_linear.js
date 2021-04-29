// Linear Search 0(n)
/* Linear search is the simplest search algorithm and often called sequential search.
 In this type of searching, we simply traverse the list completely and match each element of the list
  with the item whose location is to be found.
   If the match found then location of the item is returned otherwise the algorithm return NULL.
*/

function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 45)