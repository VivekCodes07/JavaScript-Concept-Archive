// Immediately Invoked Function Expressions (IIFE):
// An IIFE is a function in JavaScript that runs as soon as it is defined.

(function () {
  console.log("I run immediately!");
})();

((name) => {
  console.log(`DB Connected Two ${name}`);
})("Vivek");

/*

JavaScript treats anything wrapped in parentheses ( ) as an expression, not a function declaration.
So:

• (function () { ... }) -> a function expression
• ( ... )() -> immediately call that expression

*/
