function sayMyName() {
    console.log("Heisenberg");
}

sayMyName();

function sum(a, b) {
    let result = a + b;
    return result;
}

console.log(sum(13, 78));

const result = sum(5, "7"); // 57
console.log("Result: ", result);


function loginUserMsg(username = "Sam") {
    if (!username) {
        console.log("Please enter a username.");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("vivek"));
console.log(loginUserMsg());