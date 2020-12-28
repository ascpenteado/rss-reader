import { useState } from "react";
import axios from "axios";
import Placeholder from "./components/Placeholder";

function App() {
  const [feedUrl, setFeedUrl] = useState("");
  const [feed, setFeed] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    getFeed(feedUrl);
  };

  const getFeed = async (feedUrl) => {
    const response = await axios.post("http://localhost:5000", { url: feedUrl });
    setFeed(response.data);
  };

  return (
    <div className="bg-gray-100 flex-col min-h-screen text-gray-700">
      <nav className="bg-blue-500 text-gray-800 p-4 flex justify-center items-center">
        <h1 className="text-2xl font-bold text-white mr-10">RSS Reader</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="p-2 rounded-md mr-2"
            type="text"
            name="rssUrl"
            id="rssUrl"
            placeholder="https://www.example.com/.rss"
            onChange={(e) => setFeedUrl(e.target.value)}
          />
          <button className="bg-green-500 text-white p-2 rounded-md" type="submit">
            Get content
          </button>
        </form>
      </nav>
      <main className="container mx-auto pt-4">
        <section>
          {feed.length === 0 ? (
            <Placeholder getFeed={getFeed} />
          ) : (
            feed.map((item) => {
              return (
                <div key={item.guid} className="max-w-screen-md mx-auto bg-gray-300 mb-4 p-4 rounded-lg flex">
                  {item.enclosure ? (
                    <img
                      className="w-1/4 rounded-md mr-4"
                      src={item.enclosure ? item.enclosure.url : ""}
                      alt={item.title}
                    />
                  ) : (
                    ""
                  )}
                  <div className="flex-col">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-sm mt-1 mb-1">{item.isoDate}</p>
                    <p className="text-base mt-3 mb-1">{item.contentSnippet}</p>
                    <a target="_blank" rel="noreferrer" href={item.link}>
                      <button className="bg-blue-500 text-white p-2 rounded-md mt-2">Go to article</button>
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
