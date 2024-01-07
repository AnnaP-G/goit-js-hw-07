const userInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

userInput.addEventListener("input", (event) => {
    const trimmedValue = event.target.value.trim();
    nameOutput.textContent = trimmedValue ? trimmedValue : "Anonymous";
});
