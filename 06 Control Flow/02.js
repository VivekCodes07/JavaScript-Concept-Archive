const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allowed to buy courses.");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in.")
}