const input11 = document.getElementById("input11");
const input12 = document.getElementById("input12");
const input13 = document.getElementById("input13");
const input14 = document.getElementById("input14");
// Add an event listener for the input event
input11.addEventListener("input", function () {
    if (input11.value >= 0) {
        decimalConversion(input11.value)
    } else {
        decimalConversion("Only positive")
    }
});

input12.addEventListener("input", () => {
    binaryConversion(input12.value)
})

input13.addEventListener("input", () => {
    octalConversion(input13.value)
})

input14.addEventListener("input", () => {
    hexadecimalConversion(input14.value)
})
/////////////////////////////////////////////////////
function decimalConversion(decimal) {
    let binary = (decimal >>> 0).toString(2);
    let octal = (decimal >>> 0).toString(8);
    let hexadecimal = (decimal >>> 0).toString(16);
    input12.value = binary
    input13.value = octal
    input14.value = hexadecimal
}


function binaryConversion(binary) {
    let decimal = parseInt(binary, 2).toString();
    let octal = (parseInt(binary, 2) >>> 0).toString(8);
    let hexadecimal = parseInt(binary, 2).toString(16);
    input11.value = decimal
    input13.value = octal
    input14.value = hexadecimal
}

function octalConversion(octal) {
    let decimal = parseInt(octal, 8);
    let binary = decimal.toString(2);
    let hexadecimal = decimal.toString(16);
    input11.value = decimal
    input12.value = binary
    input14.value = hexadecimal
}

function hexadecimalConversion(hex) {
    let decimal = parseInt(hex, 16);
    let binary = decimal.toString(2);
    let octal = decimal.toString(8);
    input11.value = decimal
    input12.value = binary
    input13.value = octal
}