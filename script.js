const input11 = document.getElementById("input11");
const input12 = document.getElementById("input12");
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
/////////////////////////////////////////
function decimalConversion(decimal) {
    let binary = (decimal >>> 0).toString(2);
    input12.value = binary
}


function binaryConversion(binary) {
    let decimal = parseInt(binary, 2).toString();
    input11.value = decimal
}