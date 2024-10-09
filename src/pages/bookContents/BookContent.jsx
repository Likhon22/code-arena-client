import React from "react";
import { Link } from "react-router-dom";
import bookCover from "../../assets/images/extra/The_Adventures_of_Sherlock_Holmes.jpg";
const BookContent = () => {
  return (
    <div className="min-h-screen flex justify-center items-center mb-5 gap-36">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-black font-bold text-2xl">
          The Adventures of Sherlock Holmes
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
                className="book-cover"
              />
            </Link>
          </aside>
        </main>
      </div>
      <article>
        <h3 className="font-bold text-gray-700 text-xl">Contents</h3>
        <div className="row">
          <ul className="col span-1-of-1 flex flex-col  text-2xl">
            <li className="font-semibold text-xl">
              <Link to={"/chapter-1"}>I. A Scandal in Bohemia (Part I)</Link>
            </li>
            <li className="font-semibold text-xl">
              <Link to={"/chapter-2"}> I. A Scandal in Bohemia Part II </Link>
            </li>
            <li className="font-semibold text-xl">
              <a href="/story_01-03.html">I. A Scandal in Bohemia (Part III)</a>
            </li>
            <li className="font-semibold text-xl">
              <a href="/story_02.html">II. The Red-Headed League</a>
            </li>
            <li className="font-semibold text-xl">
              <a href="/story_03.html">III. A Case of Identity</a>
            </li>
            <li className="font-semibold text-xl">
              <a href="/story_04.html">IV. The Boscombe Valley Mystery</a>
            </li>
            <li className="font-semibold text-xl">
              <a href="/story_05.html">V. The Five Orange Pips</a>
            </li>
            <li className="font-semibold text-xl">
              <a href="/story_06.html">VI. The Man with the Twisted Lip</a>
            </li>
            <li className="font-semibold text-xl">
              <a href="/story_07.html">
                VII. The Adventure of the Blue Carbuncle
              </a>
            </li>
            <li className="font-semibold text-xl">
              <a href="/story_08.html">
                VIII. The Adventure of the Speckled Band
              </a>
            </li>
            <li className="font-semibold text-xl">
              <a href="/story_09.html">
                IX. The Adventure of the Engineer’s Thumb
              </a>
            </li>
            <li className="font-semibold text-xl">
              <a href="/story_10.html">
                X. The Adventure of the Noble Bachelor
              </a>
            </li>
            <li className="font-semibold text-xl">
              <a href="/story_11.html">
                XI. The Adventure of the Beryl Coronet
              </a>
            </li>
            <li className="font-semibold text-xl">
              <a href="/story_12.html">
                XII. The Adventure of the Copper Beeches
              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default BookContent;
