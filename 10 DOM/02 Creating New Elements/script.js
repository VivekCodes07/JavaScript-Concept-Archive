const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children); // Returns HTMLCollection
console.log(parent.children[1].innerHTML); // Tuesday

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
    parent.children[i].style.color = "orange";
}

parent.children[1].style.backgroundColor = 'orange';
parent.children[1].style.color = 'black';

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day');
console.log(dayOne);
console.log(dayOne.parentElement); // Gives the parent element
console.log(dayOne.nextElementSibling); // Gives the next element after dayOne

console.log("NODES: ", parent.childNodes); // Nodelist of all the child