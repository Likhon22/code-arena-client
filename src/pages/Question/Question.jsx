import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { createQuestion, getQuestion } from "../../api/question";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import QuestionCard from "../../component/QuestionCard/QuestionCard";

const Question = () => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const {
    data: questionData = [], // This will default to an empty array
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["question"],
    queryFn: async () => {
      const data = await getQuestion();
      console.log("Fetched question data:", data.data); // Log the fetched data
      return data; // Ensure this is returning an array
    },
  });
  const handleCategory = async (category) => {
    setSelectedCategory(category);
    const filteredAnswer = questionData?.data?.filter(
      (question) => question.category === category
    );
    refetch();
    setFilteredQuestions(filteredAnswer);

    console.log(filteredQuestions);
  };

  const categories = [
    "Web Development",
    "Machine Learning",
    "Data Science",
    "Mobile Development",
    "Game Development",
    "DevOps",
    "Cloud Computing",
    "Artificial Intelligence",
    "Cybersecurity",
    "Blockchain",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submittedData = {
      category: e.target.category.value,
      question: e.target.question.value,
      email: user?.email,
      userName: user?.displayName,
    };

    await createQuestion(submittedData);
    refetch();
    toast.success("Question added successfully");
  };

  return (
    <div className="min-h-screen w-4/5 mx-auto py-10">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="bg-gray-700 text-white rounded-full p-3 shadow-lg hover:bg-gray-800"
        >
          Ask Question
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 my-4">
        {categories.map((category) => (
          <button
            className={`${
              selectedCategory === category
                ? "btn btn-primary text-white"
                : "btn "
            }`}
            onClick={() => handleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-4 shadow-md rounded-md"
          >
            <h2 className="text-2xl font-bold mb-4">Post Your Question</h2>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="question"
                className="block text-sm font-medium text-gray-300"
              >
                Your Question
              </label>
              <textarea
                id="question"
                name="question"
                className="mt-1 p-2 w-full text-gray-300 border border-gray-300 rounded-md"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
            >
              Submit Question
            </button>
          </form>
          <div className="modal-action p-4">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Questions Section */}
      <div className="grid grid-cols-1 gap-6">
        {isLoading ? (
          <p>Loading questions...</p>
        ) : isError ? (
          <p>Error fetching questions. Please try again later.</p>
        ) : questionData?.data?.length > 0 ? (
          <div>
            {selectedCategory ? (
              <div>
                {filteredQuestions?.map((question) => (
                  <div key={question._id} className="">
                    <QuestionCard questionData={question} />
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {questionData.data.map((question) => (
                  <div key={question._id} className="">
                    <QuestionCard questionData={question} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p>No questions available.</p>
        )}
      </div>
    </div>
  );
};

export default Question;
