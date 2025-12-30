// 1. Select element by ID
const heading = document.getElementById("title");
heading.style.backgroundColor = "red";
heading.style.borderRadius = "10px";
heading.style.padding = "10px";

// 2. Select elements by Class Name -> Returns HTML Collection
const paragraphs = document.getElementsByClassName("para");
paragraphs[0].style.fontSize = "22px";
paragraphs[1].style.color = "green";


// 3. Select elements by Tag Name -> Returns HTML Collection
const boxes = document.getElementsByTagName("div");
boxes[0].style.backgroundColor = "lightgray";
boxes[1].style.backgroundColor = "yellow";


// 4. querySelector (first match only)
const firstPara = document.querySelector(".para");
firstPara.style.fontWeight = "bold";


// 5. querySelectorAll (all matches) -> Returns Node Collection
const allParas = document.querySelectorAll(".para");
allParas[0].style.fontSize = "20px";
allParas[1].style.fontSize = "18px";
