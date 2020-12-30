import React from "react";

function Nav({ handleSubmit, setFeedUrl }) {
  return (
    <nav className="bg-blue-500 text-gray-800 p-4 flex-row justify-center items-center">
      <h1 className="text-2xl font-bold text-white sm:mr-10 my-4 text-center">RSS Reader</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          className="p-2 rounded-md sm:mr-2"
          type="text"
          name="rssUrl"
          id="rssUrl"
          placeholder="https://www.example.com/.rss"
          onChange={(e) => setFeedUrl(e.target.value)}
        />
        <button className="bg-green-500 text-white p-2 rounded-md mt-4" type="submit">
          Get content
        </button>
      </form>
    </nav>
  );
}

export default Nav;
