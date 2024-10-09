import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import Register from "../pages/Register/Register";
import Question from "../pages/Question/Question";
import AllQuestionCard from "../component/QuestionCard/AllQuestionCard";
import Chatbot from "../pages/chatbot/Chatbot";
import Reading from "../pages/Reading/Reading";
import PrivateRoute from "./PrivateRoute";
import BookContent from "../pages/bookContents/BookContent";
import Chapter1 from "../pages/bookContents/Chapter1";
import Chapter2 from "../pages/bookContents/Chapter2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/question",
        element: (
          <PrivateRoute>
            {" "}
            <Question></Question>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-answers",
        element: (
          <PrivateRoute>
            <AllQuestionCard></AllQuestionCard>
          </PrivateRoute>
        ),
      },
      {
        path: "/chatbot",
        element: <Chatbot></Chatbot>,
      },
      {
        path: "/reading",
        element: <Reading></Reading>,
      },
      {
        path: "/book-contents",
        element: <BookContent></BookContent>,
      },
      {
        path: "/chapter-1",
        element: <Chapter1></Chapter1>,
      },
      {
        path: "/chapter-2",
        element: <Chapter2></Chapter2>,
      },
    ],
  },
]);

export default router;
