import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

// fetchData(jsonTypicode);


// task 1:
// try {
//   const response = await fetch(jsonTypicode)
//   const fetchData = await response.json()
//   console.log(fetchData)
// } catch (error) {
//   console.log(error)
// }


// extension:
const extensionApi = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2"
try {
  const header = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "40ad9574d32841c5b39336cfd6c0967a"
    },
  }

  const response = await fetch(extensionApi, header)
  console.log("~~~~~~ response:")
  console.log(response)
  const fetchData = await response.json()
  console.log("~~~~~~ fetchData:")
  console.log(fetchData)
} catch (error) {
  console.log(error)
}