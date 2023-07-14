let element = parseInt(prompt('Enter a number : '));
let sum = 0;
for (let i = 1; i <= element; i++) {
    sum += i;
}

console.log(`Sum of numbers from 1 to ${element} is : ${sum}`);


let sumOfmul3and5 = 0;
for (i = 1; i <= element; i++) {
    while(i%5=== 0 ||i%3 === 0){
        sumOfmul3and5 += i;
    }
}
console.log(sumOfmul3and5);
console.log(`Sum of multiple of 3 or 5 numbers from 1 to ${element} is : ${sumOfmul3and5}`);


