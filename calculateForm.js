const sendButton = document.getElementById('sendButton');
// const inputNum = document.getElementById('form-field-inputNum');
const inputNum = document.getElementById('inputNum');
const calculationResult = document.getElementById('calculationResult');

let formValid = false;


console.log(sendButton, inputNum);

sendButton.addEventListener("click", function (e) {
    e.preventDefault();
    sendForm();
});

function validate(value) {
    if (isNaN(value) == true) {
        return console.log('must be a number');
    };
    if (value <= 0) {
        return console.log('number must be bigger then 0');
    };
    formValid = true;
    console.log('success');

}
function calculate(value) {
    console.log(value);

    if (value < 201) {
        return calculationResult.innerText = '$ ' + value * 2;
        // console.log('lt 201 desired output: ', value * 2);
    }
    if (value < 501) {
        return calculationResult.innerText = '$ ' + value * 2.5;

        // console.log('lt 501 desired output: ', value * 2.5);
    }
    if (value >= 501) {
        return calculationResult.innerText = '$ ' + value * 3;

        // console.log('lt 501 desired output: ', value * 2.5);
    }
}

function sendForm() {
    calculationResult.innerText = '$';
    let value = inputNum.value;
    if (!value) { return console.log('must be filled') };
    validate(+value);
    if (!formValid) {
        return false;
    }
    calculate(value)
}