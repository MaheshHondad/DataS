/* 
Radix sort is a special sorting algorithm that works on list of numbers
It does not make comparison between elements

Consider the array of length 6 given below. Sort the array by using Radix sort.
A = {10, 2, 901, 803, 1024}
Pass 1: (Sort the list according to the digits at 0's place)
10, 901, 2, 803, 1024.
Pass 2: (Sort the list according to the digits at 10's place)
02, 10, 901, 803, 1024
Pass 3: (Sort the list according to the digits at 100's place)
02, 10, 1024, 803, 901.
Pass 4: (Sort the list according to the digits at 1000's place)
02, 10, 803, 901, 1024
Therefore, the list generated in the step 4 is the sorted list, arranged from radix sort
*/


//That takes a number and a position and returns the digit at that position.

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//The next helper we need has to do with figuring out how many digits are in a number.
//And the reason we need that if we go back here is in this example we need to know how many times we
// need to sort things into buckets how many times do we have to you know reorder everything.
// op how many digits 1234 - 4
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// And this will take a list of numbers and just tell us which number has the most digits in it 
// using Digicount - maxdigit count

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}


//DEfine function that accepts a list of
// numbers just call it radix sort something like that and then the first thing we have to do is figure
// out how many digits the largest number has.
// start a loop from zero up until the largest number of digits.
// And each time through we're going to create buckets for each digit.
// Now a bucket is just an empty array So index 0 of this array starts as an empty array 
//So this is where we reorder them a bit a bit.
// index one is an empty array.place each number in corresponding bucket based on kth digit
// replace our existing array with the values in the buckets.
//return list


function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852])








