# Arrays in JavaScript

## First Things First: Why Do Arrays Exist?

Let's think about the problem before jumping into methods.

Suppose I want to store the names of students.

```javascript
const student1 = "Rahul";
const student2 = "Aman";
const student3 = "Priya";
const student4 = "Neha";
```

This works.

But what if there are:

```text
100 students?
1000 students?
10000 students?
```

Now managing separate variables becomes impossible.

So I need a way to store multiple related values together.

That's where Arrays come in.

```javascript
const students = [
  "Rahul",
  "Aman",
  "Priya",
  "Neha"
];
```

Now I have:

```text
One Variable

Containing

Multiple Values
```

That's the first problem Arrays solve.

---

# What Is An Array Really?

I don't want to memorize:

> "Arrays are ordered collections of elements."

Instead I want to think:

```text
An Array Is A List

Where Every Value Has A Position
```

Example:

```javascript
const fruits = [
  "Apple",
  "Banana",
  "Mango"
];
```

I visualize:

```text
Position      Value

0 ---------- Apple
1 ---------- Banana
2 ---------- Mango
```

Every value lives at a specific position.

That position is called an:

```text
Index
```

---

# Why Does Index Start At 0?

This confused me a lot.

Why not:

```text
Apple  → 1
Banana → 2
Mango  → 3
```

Why:

```text
Apple  → 0
Banana → 1
Mango  → 2
```

Because arrays measure:

```text
Offset From The Beginning
```

Apple is:

```text
0 steps away
```

Banana is:

```text
1 step away
```

Mango is:

```text
2 steps away
```

That's why JavaScript starts counting from:

```text
0
```

---

# How Do I Access A Value?

If every value has an address,

then accessing a value means:

```text
Go To That Address
And Give Me What's There
```

Example:

```javascript
const fruits = [
  "Apple",
  "Banana",
  "Mango"
];

console.log(fruits[1]);
```

JavaScript thinks:

```text
Go To Position 1

Return Value
```

Output:

```javascript
Banana
```

---

# What Happens If The Position Doesn't Exist?

```javascript
const fruits = [
  "Apple",
  "Banana"
];

console.log(fruits[100]);
```

Output:

```javascript
undefined
```

Why?

Because:

```text
Position 100 Doesn't Exist
```

JavaScript couldn't find anything.

So it returns:

```javascript
undefined
```

---

# Length Is Not The Last Index

This is something I always want to remember.

```javascript
const fruits = [
  "Apple",
  "Banana",
  "Mango"
];
```

Length:

```javascript
fruits.length
```

Result:

```javascript
3
```

Last Index:

```javascript
2
```

Rule:

```text
Last Index

=

Length - 1
```

Always.

---

# Arrays Are Mutable

Mutable means:

```text
The Contents Can Change
```

Example:

```javascript
const fruits = [
  "Apple",
  "Banana",
  "Mango"
];

fruits[1] = "Orange";
```

Result:

```javascript
[
  "Apple",
  "Orange",
  "Mango"
]
```

I didn't replace the array.

I replaced the value stored at position 1.

---

# When Working With Arrays, What Am I Usually Trying To Do?

Most array problems fall into one of these categories:

```text
Add Data

Remove Data

Find Data

Transform Data

Filter Data

Check Something

Combine Data

Sort Data
```

Once I identify the problem,

the method becomes obvious.

---

# Adding Elements

## push()

Question:

```text
How do I add something at the end?
```

```javascript
const fruits = [
  "Apple",
  "Banana"
];

fruits.push("Mango");
```

Result:

```javascript
[
  "Apple",
  "Banana",
  "Mango"
]
```

Mental Model:

```text
Push To The Back
```

---

## unshift()

Question:

```text
How do I add something at the beginning?
```

```javascript
fruits.unshift("Orange");
```

Result:

```javascript
[
  "Orange",
  "Apple",
  "Banana"
]
```

Mental Model:

```text
Insert At Front
```

---

# Removing Elements

## pop()

Question:

```text
How do I remove the last item?
```

```javascript
fruits.pop();
```

Mental Model:

```text
Remove Last Element
```

Also returns the removed value.

---

## shift()

Question:

```text
How do I remove the first item?
```

```javascript
fruits.shift();
```

Mental Model:

```text
Remove First Element
```

---

## splice()

The Swiss Army Knife.

Can:

```text
Remove

Insert

Replace
```

Example:

```javascript
const fruits = [
  "Apple",
  "Banana",
  "Mango"
];

fruits.splice(1, 1);
```

Meaning:

```text
Start At Index 1

Remove 1 Item
```

Result:

```javascript
[
  "Apple",
  "Mango"
]
```

---

# Finding Data

## includes()

Question:

```text
Does This Value Exist?
```

```javascript
fruits.includes("Banana");
```

Result:

```javascript
true
```

---

## indexOf()

Question:

```text
Where Is This Value?
```

```javascript
fruits.indexOf("Banana");
```

Result:

```javascript
1
```

Not Found?

```javascript
-1
```

---

## find()

Question:

```text
Give Me The First Matching Item
```

```javascript
const users = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

const user =
users.find(
  user => user.id === 2
);
```

Result:

```javascript
{ id: 2 }
```

Mental Model:

```text
Find First Match

Stop Searching
```

---

## findIndex()

Same idea.

But instead of returning the object,

returns its position.

```javascript
users.findIndex(
  user => user.id === 2
);
```

Result:

```javascript
1
```

---

# Transforming Data

## map()

This is one of the most important methods.

Question:

```text
What If I Want The Same Number Of Items

But In A Different Form?
```

Example:

```javascript
const nums = [1,2,3];
```

I want:

```javascript
[2,4,6]
```

```javascript
const doubled =
nums.map(
  num => num * 2
);
```

Visualization:

```text
1 → 2

2 → 4

3 → 6
```

Rule:

```text
map()

Transforms Every Element
```

---

# Filtering Data

## filter()

Question:

```text
What If I Only Want Some Elements?
```

Example:

```javascript
const nums = [
  1,2,3,4,5,6
];
```

Keep only even numbers.

```javascript
const even =
nums.filter(
  num => num % 2 === 0
);
```

Result:

```javascript
[2,4,6]
```

Visualization:

```text
1 ❌

2 ✅

3 ❌

4 ✅

5 ❌

6 ✅
```

Rule:

```text
Keep Or Remove
```

---

# Converting Many Values Into One

## reduce()

The most misunderstood method.

Forget syntax.

Understand purpose.

Question:

```text
Can I Combine Multiple Values

Into One Final Value?
```

Example:

```javascript
[10,20,30,40]
```

Maybe I want:

```text
Total Sum
```

Maybe:

```text
Average
```

Maybe:

```text
One Object
```

That's what reduce does.

Example:

```javascript
const total =
[10,20,30,40].reduce(
  (acc, num) => acc + num,
  0
);
```

Visualization:

```text
0 + 10 = 10

10 + 20 = 30

30 + 30 = 60

60 + 40 = 100
```

Result:

```javascript
100
```

Rule:

```text
Many Values

↓

One Value
```

---

# Boolean Checks

## some()

Question:

```text
Does At Least One Element Match?
```

```javascript
const nums = [1,3,5,8];

nums.some(
  num => num % 2 === 0
);
```

Result:

```javascript
true
```

Because:

```text
8 Matches
```

---

## every()

Question:

```text
Do All Elements Match?
```

```javascript
nums.every(
  num => num > 0
);
```

Result:

```javascript
true
```

Rule:

```text
some()

↓

At Least One

every()

↓

Everyone
```

---

# Extracting Part Of An Array

## slice()

Question:

```text
Can I Take A Portion
Of The Array?
```

```javascript
const nums =
[1,2,3,4,5];

nums.slice(1,4);
```

Result:

```javascript
[2,3,4]
```

Important:

```text
slice()

Does Not Modify Original Array
```

---

# Combining Arrays

## concat()

```javascript
const a = [1,2];
const b = [3,4];

a.concat(b);
```

Result:

```javascript
[1,2,3,4]
```

---

## Spread Operator

Modern approach:

```javascript
const merged =
[...a, ...b];
```

Result:

```javascript
[1,2,3,4]
```

Think:

```text
Take Out All Elements

And Place Them Here
```

---

# Sorting Arrays

## sort()

Question:

```text
Can I Arrange Values In Order?
```

```javascript
const nums =
[5,2,9,1];

nums.sort(
  (a,b) => a - b
);
```

Result:

```javascript
[1,2,5,9]
```

---

# Reversing Arrays

## reverse()

```javascript
const nums =
[1,2,3];

nums.reverse();
```

Result:

```javascript
[3,2,1]
```

---

# Flattening Arrays

## flat()

Question:

```text
Can I Remove Nested Levels?
```

```javascript
const arr =
[1,[2,[3]]];

arr.flat(2);
```

Result:

```javascript
[1,2,3]
```

---

# Converting Arrays To Strings

## join()

```javascript
const fruits = [
  "Apple",
  "Banana",
  "Mango"
];

fruits.join(", ");
```

Result:

```javascript
"Apple, Banana, Mango"
```

---

# The Decision Tree

Whenever I have an array, I ask:

```text
Need To Add?
→ push()
→ unshift()

Need To Remove?
→ pop()
→ shift()
→ splice()

Need To Search?
→ includes()
→ indexOf()
→ find()
→ findIndex()

Need To Transform?
→ map()

Need To Filter?
→ filter()

Need To Combine Into One Value?
→ reduce()

Need A Boolean Check?
→ some()
→ every()

Need Part Of Array?
→ slice()

Need To Merge Arrays?
→ concat()
→ spread (...)

Need To Sort?
→ sort()

Need To Reverse?
→ reverse()

Need To Flatten?
→ flat()
```

---

# The One Mental Model I Never Want To Forget

An array is simply:

```text
A Collection Of Values

Stored In Order

Accessible Through Indexes
```

Everything else—

```javascript
push()
pop()
shift()
unshift()
find()
map()
filter()
reduce()
some()
every()
slice()
splice()
sort()
reverse()
flat()
```

—is just a tool for working with that collection.
