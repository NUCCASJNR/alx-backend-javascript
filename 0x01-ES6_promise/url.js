// // Import the node-fetch library
// import fetch from 'node-fetch';

// function fetchData(url) {
//   return fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok.");
//       }
//       return response.json();
//     });
// }

// const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
// fetchData(apiUrl)
//   .then((data) => {
//     console.log("Data fetched:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// A function that simulates fetching data based on a name
function fetchDataByName(names) {
    return Promise.resolve({ names });
  }
  
  const names = ['Alice', 'Bob', 'Charlie', 'David'];
  
  const fetchPromises = Array.from(names, fetchDataByName);
  console.log(fetchPromises)
  
  Promise.all(fetchPromises)
    .then((results) => {
      console.log('All data fetched:', results);
    })
    .catch((error) => {
      console.error('One or more promises rejected:', error);
    });
  