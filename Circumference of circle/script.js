const PI = 3.141579;

document.getElementById("mySubmit").onclick = () => {
  let value = document.getElementById("myInput").value;
  value = Number(value);
  if (isNaN(value)) {
    console.log("Enter a valid number.");
    document.getElementById("myH2").textContent = "Enter a valid number.";
  } else {
    let circumference = 2 * PI * value;
    console.log("Circumfernece is:", value);
    document.getElementById("myH2").textContent = circumference;
  }
};
