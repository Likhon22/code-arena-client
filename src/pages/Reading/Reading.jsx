import React from "react";
import bookCover from "../../assets/images/extra/The_Adventures_of_Sherlock_Holmes.jpg";
import bookCover2 from "../../assets/images/extra/c.jpg";
import { Link } from "react-router-dom";
const Reading = () => {
  return (
    <div className="min-h-screen w-4/5 my-12 mx-auto grid grid-cols-3 items-center justify-center gap-6">
      {/* Header */}

      <div>
        <h1 className="text-black font-bold text-2xl">
          The Adventures of Sherlock
        </h1>
        <h2 className="mb-6 text-black">by Arthur Conan Doyle</h2>

        {/* Main body */}
        <main className="row">
          {/* Book cover and link */}
          <aside className="">
            <Link to={"/book-contents"}>
              <img
                src={bookCover}
                alt="The Adventures of Sherlock Holmes book cover"
                className="book-cover w-[300px] h-[500px]"
              />
            </Link>
          </aside>
        </main>
      </div>

      <div>
        <h1 className="text-black font-bold text-2xl">
          C Programming For Beginners
        </h1>
        <h2 className="mb-6 text-black">by Tim Warren</h2>

        {/* Main body */}
        <main className="row">
          {/* Book cover and link */}
          <aside className="">
            <img
              src={bookCover2}
              alt="  C Programming For Beginners"
              className="book-cover w-[300px] h-[500px]"
            />
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Reading;
