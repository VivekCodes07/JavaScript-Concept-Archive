const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
// console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
    parent.children[i].style.color = "orange";
}

