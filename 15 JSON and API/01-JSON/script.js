let stringJson = `{
    "name": "vivek",
    "age": 20,
    "email": "vivek@google.com",
    "isBillionaire": true,
    "random": null
}`;

console.log(stringJson); // This is a JSON string (not a JavaScript object)

let json = JSON.parse(stringJson); // Converts JSON string -> JavaScript object
console.log(json);

let newStringJson = JSON.stringify(json); // Converts JavaScript object -> JSON string
console.log(newStringJson);

// JSON rules:
// - JSON format is strict.
// - Keys must use double quotes.
// - String values must use double quotes.
// - Allowed data types: string, number, boolean, null, array, object.
// - Not allowed in JSON: function, undefined, Date (they are either removed or converted to strings).
// - JSON is a string format used for data exchange, not a JavaScript object.
// Actual JSON is in string format