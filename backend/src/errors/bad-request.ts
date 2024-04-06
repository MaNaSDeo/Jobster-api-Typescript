import { StatusCodes } from "http-status-codes";

import CustomAPIError from "./custom-api";

// Declare the statusCode property in BadRequestError
interface BadRequestError {
  statusCode: number;
}

// BadRequestError class extends the CustomAPIError class
class BadRequestError extends CustomAPIError {
  // The constructor method is used to create and initialize instances of the class
  constructor(message: string) {
    // Call the constructor of the parent class (CustomAPIError) with the provided message
    super(message);
    // this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

// Adding properties to the class prototype
BadRequestError.prototype.statusCode = StatusCodes.BAD_REQUEST;

export default BadRequestError;
