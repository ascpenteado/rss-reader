import React from "react";
import "./Placeholder.css";

function Placeholder({ getFeed }) {
  return (
    <div className="text-center">
      <p className="mb-8">
        This tool will parse a given RSS feed and generate a list of the content. <br />
        Paste the URL in the form above and enjoy :)
      </p>
      <h3 className="font-bold text-lg mb-2">Or check some of these cool feeds:</h3>
      <div className="flex justify-center max-w-sm mx-auto">
        <button
          className="placeholder-btn"
          onClick={() => getFeed("https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss")}
        >
          Nasa Image of the Day
        </button>
        <button className="placeholder-btn" onClick={() => getFeed("https://css-tricks.com/feed/")}>
          CSS Tricks
        </button>
      </div>
    </div>
  );
}

export default Placeholder;
