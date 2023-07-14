//palindrome sequence
const checkPalindrome = (string) => {
    reversedString = string.split('').reverse().join('');
    if (string !== reversedString) {
        return 'Its not a palindrome sequence'
    }
    return 'Its a palindrome sequence'
}
var string = prompt("Enter a string : ");
let newString = checkPalindrome(string);
console.log(newString);