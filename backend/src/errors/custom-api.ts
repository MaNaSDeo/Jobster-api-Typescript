// Define a custom error class that extends the built-in Error class
class CustomAPIError extends Error {
  // The constructor method is a special method for creating and initializing an object created with a class
  constructor(message: string) {
    // Call the constructor of the parent Error class with the provided message
    super(message);
  }
}

export default CustomAPIError;
