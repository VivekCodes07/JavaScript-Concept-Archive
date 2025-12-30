const accountId = 1461;
let accountEmail = "Kumarvivek76923@gmail.com";
var accountPassword = "156645";
accountCity = "Jaipur";

let accountState;

// accountId = 2; (not allowed)

console.log(accountId);

accountEmail = "johncena@gmail.com";
accountPassword = "449966";
accountCity = "Bengaluru";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope
*/