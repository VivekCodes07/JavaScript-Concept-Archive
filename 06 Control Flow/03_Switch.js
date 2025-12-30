/*switch (key) {
    case value:

        break;

    case value:

        break;
}*/

let drink = "latte";

switch (drink) {
  case "espresso":
    console.log("Price: $3");
    break;

  case "latte":
    console.log("Price: $4");
    break;

  case "cappuccino":
    console.log("Price: $4.50");
    break;

  case "tea":
    console.log("Price: $2.50");
    break;

  default:
    console.log("Sorry, we don't have that drink.");
}
