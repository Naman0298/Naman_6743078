document.addEventListener("DOMContentLoaded", () => {

    const a = document.getElementById("a");
    const b = document.getElementById("b");
    const result = document.getElementById("result");

    function calculate(op) {
        const num1 = Number(a.value);
        const num2 = Number(b.value);

        let answer;

        if (op === "+") answer = num1 + num2;
        if (op === "-") answer = num1 - num2;
        if (op === "*") answer = num1 * num2;

        if (op === "/") {
            if (num2 === 0) {
                result.textContent = "Cannot divide by 0";
                return;
            }
            answer = num1 / num2;
        }

        result.textContent = answer;
    }

    document.getElementById("add").onclick = () => calculate("+");
    document.getElementById("sub").onclick = () => calculate("-");
    document.getElementById("mul").onclick = () => calculate("*");
    document.getElementById("div").onclick = () => calculate("/");

    document.getElementById("clear").onclick = () => {
        a.value = "";
        b.value = "";
        result.textContent = "—";
    };
});