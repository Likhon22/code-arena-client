import { useEffect, useState } from "react";
import { axiosSecure } from "../../api";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const email = user.email;
  useEffect(() => {
    // Fetch user data by email
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(`/user/data/${email}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchData();
  }, [email]);
  console.log(userData);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#1e3d59] to-[#4c647a]">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-sm w-full transform transition-all duration-500 hover:scale-105 animate-fadeIn">
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <img
              src={user?.photoURL}
              alt="Rahim"
              className="w-28 h-28 bg-black rounded-full mx-auto border-8 border-[#1e3d59] opacity-0 animate-fadeInDelay"
            />
            <span className="absolute bottom-1 right-1 block h-4 w-4 rounded-full bg-green-500 border-2 border-white"></span>
          </div>
          <h2 className="text-3xl font-semibold mt-4 text-gray-900 opacity-0 animate-fadeInDelay">
            {user?.displayName}
          </h2>
          <p className="text-gray-500 text-sm opacity-0 animate-fadeInDelay">
            {user?.email}
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-inner opacity-0 animate-slideUp">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <p className="text-xl font-bold text-[#1e3d59]">
                {userData?.data?.totalQuestions}
              </p>
              <p className="text-gray-500 text-sm">Total Questions</p>
            </div>
            <div>
              <p className="text-xl font-bold text-[#1e3d59]">
                {userData?.data?.totalAnswers}{" "}
              </p>
              <p className="text-gray-500 text-sm">Total Answers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
