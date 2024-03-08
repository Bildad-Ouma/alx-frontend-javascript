function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call
    setTimeout(() => {
      const success = true; // Simulated success response
      if (success) {
        resolve("Success response from API");
      } else {
        reject("Error response from API");
      }
    }, 2000); // Simulating a 2-second delay
  });
}

export default getResponseFromAPI;
