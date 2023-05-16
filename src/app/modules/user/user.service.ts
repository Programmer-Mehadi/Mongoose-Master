import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (
  payload: IUser
): Promise<
  | IUser
  | {
      status: string;
      error: object;
    }
> => {
  try {
    const user = await new User(payload);
    if (user) {
      return await user.save();
    }
    return { status: "Not inserted.", error: {} };
  } catch (error) {
    return { status: "Not inserted.", error };
  }
};
export const getUSersToDB = async (): Promise<IUser[]> => {
  const allUsers = await User.find();
  return allUsers;
};
