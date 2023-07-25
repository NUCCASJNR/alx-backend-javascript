// Import the node-fetch library
import fetch from 'node-fetch';

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    });
}

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
fetchData(apiUrl)
  .then((data) => {
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });