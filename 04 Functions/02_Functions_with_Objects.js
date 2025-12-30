
// Rest Operator (...)
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000)); // [500, 200]



const user = {
    username: "Vivek",
    price: 999
}

// Passing Objects to the function:
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

// Passing direct objects to the function:
handleObject({
    username: "John",
    price: 199
})


// Passing arrays to the function

const myNewArray = [200, 100, 567, 800];

function returnSecondValue(getArr) {
   return getArr[1];
}

console.log(returnSecondValue(myNewArray)); // 100

// Passing direct arrays
console.log(returnSecondValue([1, 2, 3, 4, 5, 6])); // 2