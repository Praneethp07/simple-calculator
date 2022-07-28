let outputText = document.getElementById("outputText");

function calculate() {
    try {
        outputText.value = eval(outputText.value);
    } catch (err) {
        alert("invalid");
    }
}

function display(num) {
    outputText.value += num;
    // console.log("done");
}

function fulldel() {
    outputText.value = "";
    // console.log("done");
}

function del() {
    outputText.value = outputText.value.slice(0, -1);
}