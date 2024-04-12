import User from "../models/User";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors";
import { type Request, type Response } from "express";

const register = (req: Request, res: Response) => {
  res.status(StatusCodes.CREATED).json({ request: req.body });
};

const login = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ request: req.body });
};

const updateUser = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ request: req.body });
};

export { register, login, updateUser };
