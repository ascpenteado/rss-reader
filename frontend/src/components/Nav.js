import React from "react";

function Nav({ handleSubmit, setFeedUrl }) {
  return (
    <nav className="bg-blue-500 text-gray-800 p-4 md:flex justify-center items-center">
      <h1 className="text-2xl font-bold text-white text-center">
        <a href="/">RSS Reader</a>
      </h1>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          className="p-2 rounded-md mt-4 w-full md:mt-0 md:w-auto md:mx-4"
          type="text"
          name="rssUrl"
          id="rssUrl"
          placeholder="https://www.example.com/.rss"
          onChange={(e) => setFeedUrl(e.target.value)}
        />
        <button
          className="bg-green-500 text-white p-2 rounded-md mt-4 md:mt-0 transition-all hover:bg-green-400"
          type="submit"
        >
          Get content
        </button>
      </form>
    </nav>
  );
}

export default Nav;
