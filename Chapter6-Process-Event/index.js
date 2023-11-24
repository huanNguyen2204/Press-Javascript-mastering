function checkAgeNotNegative() {
  const output = document.getElementById("output");
  const element = document.getElementById("age");
  const age = document.value;

  if (age < 0) {
    output.textContent = "Age cannot be negative";
  } else {
    output.textContent = "";
  }
}