const btnBaseline = document.getElementById("btn-baseline");
const btnLeading = document.getElementById("btn-leading");
const btnStacked = document.getElementById("btn-stacked");
const baselineBar = document.querySelector(".baseline");
const leadingBar = document.querySelector(".leading");
const stackedBar = document.querySelector(".stacked");

btnBaseline.addEventListener("click", baselineToggle);
btnLeading.addEventListener("click", leadingToggle);
btnStacked.addEventListener("click", stackedToggle);

function baselineToggle() {
  baselineBar.style.visibility = "visible";
  setTimeout(() => {
    baselineBar.style.visibility = "hidden";
  }, 5000);
}

function leadingToggle() {
  leadingBar.style.visibility = "visible";
  setTimeout(() => {
    leadingBar.style.visibility = "hidden";
  }, 5000);
}

function stackedToggle() {
  stackedBar.style.visibility = "visible";
  setTimeout(() => {
    stackedBar.style.visibility = "hidden";
  }, 5000);
}
