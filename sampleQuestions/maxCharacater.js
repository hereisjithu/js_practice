document.addEventListener("DOMContentLoaded", function () {
    const inputString = document.getElementById('wordString');
    const findMax = document.getElementById('checkMaxchar');
    findMax.addEventListener('click', function () {
        let mapElement = {}
        inputString.value.split('').forEach(element => {
            if (mapElement[element]) {
                mapElement[element]++

            }
            else {
                mapElement[element] = 1;
            }
        });
        let mostRepeatedWord = "";
        let maxNum = 0;

        for (const char in mapElement) {
            if (mapElement[char] > maxNum) {
                mostRepeatedWord = char;
                maxNum = mapElement[char];
            }
        }
        console.log(mapElement)
        document.getElementById("maxCharaResult").value = mostRepeatedWord;
    });
});