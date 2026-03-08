async function fetchData() {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments",
  );

  console.log(await response.json());
}

let button = document.querySelector("#btn");

button.addEventListener("click", function () {
  fetchData();
});
