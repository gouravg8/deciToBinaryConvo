const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const calculateBtn = document.getElementById("calculate-btn")

// calculateBtn.addEventListener("click", function () {
//     // Get the values from the input fields
//     const input1Value = input1.value;
//     const input2Value = input2.value;

//     if (input1Value != "" || input2Value != "") {
//         // Perform calculations or logic here
//         console.log("Value 1: " + input1Value);
//         console.log("Value 2: " + input2Value);

//         // input1.dispatchEvent(new Event("change"));
//         // input2.dispatchEvent(new Event("change"));
//     } else {
//         console.log("khali hai")
//     }
// });

// Add an event listener for the onchange event
input1.addEventListener("input", function () {
    console.log("Input 1 value is " + input1.value);

    input2.value = decimalToBinary(input1.value);

    function decimalToBinary(decimal) {
        if(decimal >= 0){
            return (decimal >>> 0).toString(2);
        }else{
            return 'Only positive'
        }
    }
});

input2.addEventListener("input", function () {
    console.log("Input 2 value is " + input2.value);
    input1.value = binaryToDecimal(input2.value)

    function binaryToDecimal(binary) {
        if (typeof binary !== 'string') {
            return 'Input must be a string'
        }
        if (!/^[01]+$/.test(binary)) {
            return 'Not valid'
        }
        return parseInt(binary, 2);
    }
});