import React, { useState } from "react";
import { createAnswer, getAnswer } from "../../api/answer";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const AllQuestionCard = () => {
  const location = useLocation();
  const { questionData } = location.state || {};
  const [liked, setLiked] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState("");

  // Fetch answers for the specific question using questionData._id
  const {
    data: answers = [], // Default to an empty array
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["answer", questionData?._id], // Include question ID in query key
    queryFn: async () => {
      const data = await getAnswer(questionData?._id); // Fetch answers using question ID
      console.log("Fetched answer data:", data); // Log fetched data
      return data; // Ensure returning data
    },
  });

  const handleCommentToggle = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    const answerData = {
      questionId: questionData._id, // Reference to the specific question
      userName: questionData.userName, // Assuming you have the user's name
      answer: comment,
    };

    try {
      await createAnswer(answerData); // Call API to save the answer
      toast.success("Answer submitted successfully!");
      setComment(""); // Clear input after submission
      setShowCommentInput(false); // Hide the comment input
      refetch(); // Refetch answers to display the newly added answer
    } catch (error) {
      console.error("Error submitting answer:", error);
      toast.error("Failed to submit answer. Please try again.");
    }
  };
  return (
    <div className="min-h-screen w-4/5 mx-auto py-10">
      <div className="bg-[#1e3d59]  shadow-md rounded-lg p-6 mb-6">
        <p className="capitalize">{questionData?.userName}</p>
        <h2 className="text-2xl font-bold mb-2 capitalize">
          {questionData.title}
        </h2>
        <p className="text-[#f5f4e1] mb-2 capitalize">
          {questionData.question}
        </p>
        <p className="text-gray-500 mb-4">
          <strong>Category:</strong> {questionData.category}
        </p>
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={handleCommentToggle}
            className="px-4 py-2 bg-[#f5f4e1] text-gray-700 rounded-md"
          >
            Answer
          </button>
        </div>
        {showCommentInput && (
          <div className="mb-4">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              placeholder="Write an answer..."
              value={comment}
              onChange={handleCommentChange}
            />
            <button
              onClick={handleCommentSubmit} // Fixed this line
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit Answer
            </button>
          </div>
        )}
        <div className="mt-4">
          {isLoading ? (
            <p>Loading answers...</p>
          ) : isError ? (
            <p>Error fetching answers.</p>
          ) : answers?.data?.length > 0 ? (
            <div className=" mb-5">
              {answers?.data?.map((answer) => (
                <div
                  key={answer._id}
                  className="bg-gray-700 p-4 mb-3 rounded-md"
                >
                  <p className="text-gray-300">{answer.answer}</p>
                  <p className="text-gray-500 text-sm">
                    <strong>{answer.userName}</strong> -{" "}
                    {new Date(answer.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No answers yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllQuestionCard;
