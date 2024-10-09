import { useQuery } from "@tanstack/react-query";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

import chatBanner from "../../assets/images/extra/chatbot.jpg";
import chatBanner2 from "../../assets/images/extra/chatbot2.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { axiosSecure } from "../../api";

const Chatbot = () => {
  const [response, setResponse] = useState("");

  const [questionData, setQuestionData] = useState("");

  const { data: chat, isLoading } = useQuery({
    queryKey: ["chat"],
    queryFn: async () => {
      const response = await axiosSecure.get("/chatbot/question");
      return response.data;
    },
  });

  useEffect(() => {
    if (questionData) {
      const question = questionData.trim().toLowerCase();
      fetchData(question);
    } else {
      setQuestionData("");
    }
  }, [questionData]);

  const fetchData = async (question) => {
    try {
      const response = await axiosSecure.get(`/chatbot?question=${question}`);
      setResponse(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setResponse("I'm sorry, I couldn't retrieve the answer at the moment.");
    }
  };
  return (
    <div className="my-24">
      <div
        className="min-h-screen w-4/5 mx-auto flex justify-center items-center    py-24"
        style={{
          backgroundImage: `url(${chatBanner2})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[600px]">
          <h1 className="text-4xl font-bold text-black text-center py-8">
            Chatbot
          </h1>
          <div
            className="text-white w-full font-medium min-h-[600px] p-12 rounded-md shadow-2xl "
            key={response}
            style={{
              backgroundImage: `url(${chatBanner})`,

              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            {response ? (
              <TypeAnimation
                sequence={[`${response}`, 1000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={1}
              />
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center py-8">
            <Autocomplete
              disablePortal
              onChange={(e, value) => setQuestionData(value)}
              id="combo-box-demo"
              options={chat}
              sx={{ width: 500, bgcolor: "white" }}
              renderInput={(params) => (
                <TextField {...params} label="Question" />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
