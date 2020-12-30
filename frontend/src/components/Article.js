import React from "react";

function Article({ item }) {
  return (
    <div className="max-w-screen-md mx-auto bg-gray-300 mb-4 rounded-lg flex-col">
      {item.enclosure ? (
        <img className="rounded-md rounded-b-none" src={item.enclosure ? item.enclosure.url : ""} alt={item.title} />
      ) : (
        ""
      )}
      <div className="flex-col p-4">
        <h2 className="text-lg font-bold">{item.title}</h2>
        <p className="text-xs mt-1 mb-1">{item.isoDate}</p>
        <p className="text-base mt-3 mb-1">{item.contentSnippet}</p>
        <a target="_blank" rel="noreferrer" href={item.link}>
          <button className="bg-blue-500 text-white p-2 text-sm rounded-md mt-2">Read article</button>
        </a>
      </div>
    </div>
  );
}

export default Article;
