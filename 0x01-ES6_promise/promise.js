function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Operation completed after ${ms} milliseconds`);
      }, ms);
    });
  }
  
delay(990)
  .then((result) => {
    console.log(result); // Output: Operation completed after 2000 milliseconds.
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Promise has been resolved or rejected.");
  });
