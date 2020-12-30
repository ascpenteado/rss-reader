import { useState } from "react";
import axios from "axios";
import Placeholder from "./components/Placeholder";
import Nav from "./components/Nav";
import Article from "./components/Article";

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
    <div className=" flex-col min-h-screen text-gray-700 bg-gray-100">
      <Nav handleSubmit={handleSubmit} setFeedUrl={setFeedUrl} />
      <main className="container px-4 mx-auto pt-4">
        <section>
          {feed.length === 0 ? (
            <Placeholder getFeed={getFeed} />
          ) : (
            feed.map((item) => {
              return <Article item={item} key={item.guid} />;
            })
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
