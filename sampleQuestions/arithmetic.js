document.addEventListener("DOMContentLoaded", function () {
    const number1Input = document.getElementById("number1");
    const number2Input = document.getElementById("number2");
    const addButton = document.getElementById("add");
    const subButton = document.getElementById("sub");
    const mulButton = document.getElementById("mul");
    const divButton = document.getElementById("div");
    const resultInput = document.getElementById("Result");

    addButton.addEventListener("click", function () {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        const result = num1 + num2;
        resultInput.value = result;
    });

    subButton.addEventListener("click", function () {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        const result = num1 - num2;
        resultInput.value = result;
    });

    mulButton.addEventListener("click", function () {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        const result = num1 * num2;
        resultInput.value = result;
    });

    divButton.addEventListener("click", function () {
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);
        const result = num1 / num2;
        resultInput.value = result;
    });
});

