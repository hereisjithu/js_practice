document.addEventListener("DOMContentLoaded", function () {
    const inputString = document.getElementById('palindrome');
    const checkResult =document.getElementById('check')
    checkResult.addEventListener('click', function () {
        
        let text1 = inputString.value.split('').join('');
        let reversedText1 = inputString.value.split('').reverse().join('');

        if (text1 == reversedText1) {
            document.getElementById("palindromeResult").value = `It's a palindrome`
            console.log(`It's a palindrome`)

        }
        else {
            document.getElementById("palindromeResult").value = `It's not a palindrome`
            console.log(`It's not a palindrome`)
        }
    });
});
