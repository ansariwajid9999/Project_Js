const min = 1;
const max = 100;
const evaluate = document.getElementById("mySubmit");

let value = Math.floor(Math.random() * (max - min) + min);
let count = 0;

evaluate.onclick = function () {
  const inputVal = document.getElementById("myInput").value;
  count++;

  if (inputVal == value) {
    document.getElementById("myH1").textContent =
      `Congratulation! , You have won and took ${count} number of attemps.`;
  } else if (inputVal > value) {
    document.getElementById("myH1").textContent = "Enter smaller value.";
  } else if (inputVal < value) {
    document.getElementById("myH1").textContent = "Enter greater value.";
  }
};
