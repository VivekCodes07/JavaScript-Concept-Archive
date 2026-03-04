async function fetchData() {
  let response = await fetch("https://dummyjson.com/users");
  console.log(await response.json());
}

fetchData();
