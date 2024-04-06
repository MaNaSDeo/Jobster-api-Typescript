import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import * as dotenv from "dotenv";
import connectDB from "./db/connect";

dotenv.config(); // Load environment variables from .env file

const app: Express = express(); // Initialize express application
const port = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON bodies

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Middleware to log incoming requests
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Incoming request: ${req.method} ${req.path}`);
  next();
});

app.get("/api/v1", (req: Request, res: Response) => {
  res.send("<h1>Joster API</h1>");
});

// Function to start the server and connect to the database
const start = async (): Promise<void> => {
  try {
    await connectDB(process.env.MONGO_URI!);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
