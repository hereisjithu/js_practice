
document.addEventListener("DOMContentLoaded", function () {
    const inputString = document.getElementById('reverseString');
    const checkResult =document.getElementById('reverseText')
    checkResult.addEventListener('click', function () {
        
      
        let reversedText1 = inputString.value.split('').reverse().join('');
        

        
            document.getElementById("reverseResult").value =  reversedText1

        
      
    });
});
