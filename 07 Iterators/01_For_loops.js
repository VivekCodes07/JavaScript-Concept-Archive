let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr.length; i++) {
  console.log(`Element at index ${i} = ${arr[i]}`);
  if (i == 5) {
    console.log("This is 5");
  }
}

// Nested Loop
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`${i} ${j}`);
  }
}

// Printing Multiplication Table:

for (let i = 1; i <= 10; i++) {
  console.log(`5 X ${i} = ${5 * i}`);
}

// break and continue

for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log("Detected 5");
    break;
  }
  console.log(i);
}

// break -> stop and exit the loop
// continue -> Skip the current iteration