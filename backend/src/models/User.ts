import mongoose, { Document, Schema } from "mongoose";
import validator from "validator";

// Define the structure of User document
interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
}

const UserSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: [true, "Please provide a First Name"],
    maxLength: 50,
    minLength: 3,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please provide a Last Name"],
    maxLength: 50,
    minLength: 3,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      /*
            function (email: string) {
            const emailRegex = /^[\w.-]+@[\w-]+\.[\w]{2,4}$/;
            return emailRegex.test(email);
            },
        */
      validator: (value: string) => validator.isEmail(value),
      message: "Please provide a valid email adress",
    },
    pasword: {
      type: String,
      required: [true, "Please provide a password"],
      minLength: 8,
      validate(value: string) {
        if (
          !value.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            /*
                (?=.*[a-z]): This is a positive lookahead that checks if there is at least one lowercase letter in the password.
                (?=.*[A-Z]): This checks if there is at least one uppercase letter in the password.
                (?=.*\d): This checks if there is at least one digit in the password.
                (?=.*[@$!%*?&]): This checks if there is at least one special character (@, $, !, %, *, ?, &) in the password.
                [A-Za-z\d@$!%*?&]{8,}$: This checks if the password is at least 8 characters long and only contains the allowed characters (lowercase letters, uppercase letters, digits, and the special characters).
            */
          )
        ) {
          throw new Error(
            "Password must contain at least one lowercase letter, one uppercase letter, one number and one of the <!@$-> symbols"
          );
        }
      },
    },
    location: {
      type: String,
      trim: true,
      maxLength: 50,
      default: "Banglore",
    },
  },
});

export default mongoose.model<IUser>("User", UserSchema);
