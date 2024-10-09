import { axiosSecure } from ".";

export const createUser = async (userData) => {
  try {
    const response = await axiosSecure.post("user/create-user", userData);
    return response;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};
