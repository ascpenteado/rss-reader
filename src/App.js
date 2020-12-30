import { useState } from "react";
import getFeedItems from "./services/rss-parser";

import Loader from "./components/Loader";
import Placeholder from "./components/Placeholder";
import Nav from "./components/Nav";
import Article from "./components/Article";

function App() {
  const [feedUrl, setFeedUrl] = useState("");
  const [feed, setFeed] = useState("");
  const [promiseInProgress, setPromiseInProgress] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    getFeed(feedUrl);
  };

  const getFeed = async (feedUrl) => {
    setPromiseInProgress(true);
    const newFeed = await getFeedItems(feedUrl);
    setFeed(newFeed);
    setPromiseInProgress(false);
  };

  return (
    <div className="min-h-screen text-gray-700 bg-gray-100">
      <Nav handleSubmit={handleSubmit} setFeedUrl={setFeedUrl} />
      <main className="container px-4 mx-auto pt-4">
        <section>
          {promiseInProgress === true ? (
            <Loader />
          ) : feed.length === 0 ? (
            <div>
              <Placeholder getFeed={getFeed} />
            </div>
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
