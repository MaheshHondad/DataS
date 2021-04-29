
// Add numbers ex n=3 o/p =1+2+3 =6
let Add1 =(n)=> {
    let sum =0;
    for(let i=1; i<=n; i++){
        sum+=i
    }
    return sum;
}

// console.log(Add1(10));

let Add2 = (n) => {
    let sum1=0
    return sum1 = n * (n+1)/2;
}
var time1 = performance.now();
console.log(Add2(10));
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2-time1)/1000} seconds.`)