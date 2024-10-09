import { axiosSecure } from ".";

export const createQuestion = async (question) => {
  try {
    const response = await axiosSecure.post(
      "/questions/create-question",
      question
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getQuestion = async () => {
  try {
    const response = await axiosSecure.get("/questions");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
