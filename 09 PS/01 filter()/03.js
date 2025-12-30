// Q3. Filter users who are active AND older than 18.

const users = [
  { name: "Anil", age: 17, isActive: true },
  { name: "Sunita", age: 22, isActive: true },
  { name: "Rohit", age: 19, isActive: false },
  { name: "Kiran", age: 25, isActive: true }
];

const validUser = users.filter((user) => {
    if (user.age > 18 && user.isActive == true) {
        return user;
    }
});

console.log(validUser);


