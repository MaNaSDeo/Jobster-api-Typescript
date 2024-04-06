import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api";

interface UnauthenticatedError {
  statusCode: number;
}
class UnauthenticatedError extends CustomAPIError {
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthenticatedError;
