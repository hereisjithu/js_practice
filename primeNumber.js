let checkPrime = (number) => {
    if (number < 2) {
        return `It's not a Prime number`
    }
    else {
        for (let i = 2; i < number; i++) {
if(number%2 == 0){
    return `It's not a Prime number`
}
        }
    }
    return `It's a prime number`
}
let number = prompt('Enter a number to check prime or not : ')
let checkNumber = checkPrime(number);
console.log(checkNumber);