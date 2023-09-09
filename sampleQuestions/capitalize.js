document.addEventListener("DOMContentLoaded", function () {
    const inputSentance = document.getElementById('sentanceString');
    const checkResult =document.getElementById('sentanceText')
    checkResult.addEventListener('click', function () {
        
      
        let capitalizedText = inputSentance.value.split(' ').map((word)=>word[0].toUpperCase()+word.slice(1)).join(' ')
        
        

        
            document.getElementById("maxCharaResult").value = capitalizedText

        
      
    });
});
