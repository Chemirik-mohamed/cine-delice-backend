import bcrypt from "bcryptjs";

import type { HashPassword, ComparePassword } from "types/bcrypt";

export const hashPassword: HashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hash = bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    throw new Error("Error hashing password: " + error);
  }
};

export const comparePassword: ComparePassword = async (
  password,
  hashPassword,
) => {
  try {
    const match = await bcrypt.compare(password, hashPassword);
    return match;
  } catch (error) {
    throw new Error("Error comparing password: " + error);
  }
};
