document.addEventListener("DOMContentLoaded", function () {
    const conversionType = document.getElementById("conversionType");
    const inputValue = document.getElementById("inputValue");
    const outputValue = document.getElementById("outputValue");
    const unitLabel1 = document.getElementById("unitLabel1");
    const unitLabel2 = document.getElementById("unitLabel2");
    const convertBtn = document.getElementById("convertBtn");

    // Conversion formulas
    function convert() {
        let input = parseFloat(inputValue.value);
        let result = 0;

        if (isNaN(input)) {
            outputValue.value = "";
            return;
        }

        switch (conversionType.value) {
            case "length":
                result = input * 3.28084; // Meters to Feet
                unitLabel1.textContent = "Meters";
                unitLabel2.textContent = "Feet";
                break;
            case "weight":
                result = input * 2.20462; // Kilograms to Pounds
                unitLabel1.textContent = "Kg";
                unitLabel2.textContent = "Pounds";
                break;
            case "temperature":
                result = (input * 9/5) + 32; // Celsius to Fahrenheit
                unitLabel1.textContent = "Celsius";
                unitLabel2.textContent = "Fahrenheit";
                break;
        }
        
        outputValue.value = result.toFixed(2); // Display result with 2 decimal places
    }

    // Convert on button click
    convertBtn.addEventListener("click", convert);

    // Auto update conversion as user types
    inputValue.addEventListener("input", convert);

    // Change labels dynamically based on selected conversion type
    conversionType.addEventListener("change", function () {
        inputValue.value = "";
        outputValue.value = "";
        convert();
    });
});
