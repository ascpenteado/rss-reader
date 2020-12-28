import React from "react";

function Placeholder({ getFeed }) {
  return (
    <div className="text-center">
      <h3 className="font-bold text-lg mb-2">Check some of these cool feeds:</h3>
      <div className="flex justify-center max-w-sm mx-auto">
        <button
          className="bg-blue-500 text-white p-2 rounded-md mr-4 mt-2"
          onClick={() => getFeed("https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss")}
        >
          Nasa Image of the Day
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md mt-2"
          onClick={() => getFeed("https://css-tricks.com/feed/")}
        >
          CSS Tricks
        </button>
      </div>
    </div>
  );
}

export default Placeholder;
