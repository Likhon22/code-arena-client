import { axiosSecure } from ".";

export const createAnswer = async (answerData) => {
  const response = await axiosSecure.post("/answers/create-answer", answerData);
  return response.data;
};

export const getAnswer = async (questionId) => {
  const response = await axiosSecure.get(`/answers/${questionId}`);
  return response.data;
};
