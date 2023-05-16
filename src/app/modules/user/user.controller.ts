import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUSersToDB } from "./user.service";

export const createUSer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUSers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allUserData = await getUSersToDB();
  res.status(200).json({
    staus: "success",
    data: allUserData,
  });
};
