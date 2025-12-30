// if statements

const isUserLoggedIn = true;

if (3 != 2) {
  console.log("Hello World! logined");
}

if (2 == "2") {
  console.log("executed");
}

const temperature = 41;

if (temperature < 50) {
  console.log("Temperature is less than 50.");
} else {
  console.log("Temperature is greater than 50.");
}

const score = 200;

if (score >= 200) {
  const power = "Fly";
  console.log(`User Power: ${power}`);
}

// Short-Hand

const balance = 1000;

// if(balance > 500) console.log("Test");

if (balance < 500) {
  console.log("Less than 500");
} else if (balance < 750) {
  console.log("Less than 750");
} else if (balance < 900) {
  console.log("Less than 900");
} else {
  console.log("Less than 120000");
}
