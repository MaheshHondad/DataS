// Refactoring

const charCount3 = (string) => {
    let result ={}
    for (let char of string){
        if (isAlphanumeric(char)){
            console.log(char);
            char=char.toLowerCase();
            console.log(char);
        result[char] = ++result[char] || 1;
        }
    }
    return result;
}

let isAlphanumeric = (char)=> {
    var code = char.charCodeAt(0);
    if(!(code> 47 && code<58) &&
    !(code>64 && code<91) &&
    !(code>96 && code<123)){
        return false
    }
    return true;
}

console.log(charCount3('HI'))


///

let instructor = {
    firstName: 'Mahesh',
    isIntructor: true,
    favNumber:[1,2,3,4]
}

instructor.newValue1 = '1Yes'

// for (let key in instructor){
//     console.log(key);
//     console.log(instructor[key])
// }

// console.log(Object.entries(instructor));
// console.log(instructor.hasOwnProperty('firstName'))

// Add two Numbers

let addNumbers= (a, b=4) => {
    let sum =0;
    return sum = a+b
}

console.log(addNumbers(5));


// Count characters in a string

let charCount =(string)=> {
    let result= {};
    for(let i=0; i < string.length; i++){
        let char = string[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
        if(result[char]>0){
            result[char]++;
        }
        else{
            result[char]=1;
        };
    }
    }
    return result;
};

console.log(charCount('Hello the !@344'));

// using for of loop
let charCount1 = (string)=> {
    let result={};
    for (let char of string){
        char=char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            result[char] = ++result[char] || 1;
//             if(result[char]>0){
//                 result[char]++;
//             }
//             else{
//                 result[char] = 1
//             }
        }
    }
    return result
}



