const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // Reset previous styles
  results.className = "";

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please enter a valid height.";
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please enter a valid weight.";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let status = "";

    if (bmi < 18.6) {
      status = "Underweight";
      results.classList.add("underweight");
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      status = "Normal";
      results.classList.add("normal");
    } else {
      status = "Overweight";
      results.classList.add("overweight");
    }

    results.innerHTML = `Your BMI is <strong>${bmi}</strong><br>
                         Status: <strong>${status}</strong>`;
  }
});
