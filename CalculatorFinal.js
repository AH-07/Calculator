let calculation = (document.querySelector(".js-display").innerHTML = localStorage.getItem("calculation") || "");

function updateCalculation(value) {
  calculation += value;
  document.querySelector(".js-display").innerHTML = calculation;
  localStorage.setItem("calculation", calculation);
}