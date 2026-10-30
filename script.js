
const display = document.getElementById("display");

function append(value) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    display.innerText =
        display.innerText.slice(0, -1) || "0";
}

function calculate() {
    try {
        let expression =
            display.innerText.replace(/%/g, "/100");

        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            throw new Error("Invalid");
        }

        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        display.innerText = Number.isFinite(result)
            ? String(Number(result.toFixed(10)))
            : "Error";

    } catch {
        display.innerText = "Error";
    }
}
