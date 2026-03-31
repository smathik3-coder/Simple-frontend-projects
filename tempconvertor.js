function convert() {
    const celVal = Number(document.getElementById("input").value);
    const fahrenVal =(celVal*1.8) + 32;
    const output = document.getElementById("result");
    output.innerHTML = fahrenVal.toFixed(3) + "fahrenheit";
}
