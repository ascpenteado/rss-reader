import React from "react";

function Loader() {
  return (
    <div className="max-w-screen-md mx-auto bg-gray-200 mb-4 p-4 rounded-lg flex-col">
      <div className="bg-gray-400 h-6 w-3/4 rounded-md animate-pulse mb-4"></div>
      <div className="bg-gray-300 animate-pulse rounded-md mt-4 w-10/12 h-4"></div>
      <div className="bg-gray-300 animate-pulse rounded-md mt-4 w-9/12 h-4"></div>
      <div className="bg-gray-300 animate-pulse rounded-md mt-4 w-11/12 h-4"></div>
      <div className="bg-gray-300 animate-pulse rounded-md mt-4 w-10/12 h-4"></div>
      <button className="bg-gray-400 animate-pulse rounded-md mt-2 w-24 h-8"></button>
    </div>
  );
}

export default Loader;
