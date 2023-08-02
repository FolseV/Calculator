const inputEl1 = document.getElementById("num1");
const inputEl2 = document.getElementById("num2");
const resultEl = document.getElementById("result");
const plusEl = document.getElementById("btnPlus");
const minusEl = document.getElementById("btnMinus");
const multEl = document.getElementById("btnMult");
const divEl = document.getElementById("btnDiv");
const calculateEl = document.getElementById("btnCalculate");
let action = "+";

plusEl.onclick = function () {
  action = "+";
};
minusEl.onclick = function () {
  action = "-";
};
multEl.onclick = function () {
  action = "*";
};
divEl.onclick = function () {
  action = "/";
};

function printResult(result) {
  if (result < 0) {
    resultEl.style.color = "red";
  } else {
    resultEl.style.color = "green";
  }
  resultEl.textContent = result;
}

function computeNumbersWithAction(el1, el2, action) {
  const num1 = Number(inputEl1.value);
  const num2 = Number(inputEl2.value);
  if (action == "+") {
    return num1 + num2;
  } else if (action == "-") {
    return num1 - num2;
  } else if (action == "*") {
    return num1 * num2;
  } else if (action == "/") {
    return num1 / num2;
  }
}

calculateEl.addEventListener("click", function () {
  const result = computeNumbersWithAction(inputEl1, inputEl2, action);
  printResult(result);
});
