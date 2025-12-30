// Singleton 
// Object.create


// Object literals

const mySym = Symbol("Key 1");

const user = {
    name: "Vivek", // (B.T.S, name is stored as -> "name")
    age: 19,
    location: "Jaipur",
    email: "vivek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myKey1"
};

console.log(user.email);
console.log(user["email"]);

console.log(user[mySym]);
console.log(typeof user[mySym]);

user.email = "vivek@microsoft.com";
// Object.freeze(user);
user.email = "vivek@chatgpt.com";
console.log(user);

user.greeting = function() {
    console.log("Hello! JS user");
}

user.greetingTwo = function() {
    console.log(`Hello! ${this.name}`);
}

console.log(user.greeting());

console.log(user.greetingTwo())