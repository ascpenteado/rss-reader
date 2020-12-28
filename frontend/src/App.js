import { useState } from "react";
import axios from "axios";

function App() {
  const [feedUrl, setFeedUrl] = useState("");
  const [feed, setFeed] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    getFeed(feedUrl);
  };

  const getFeed = async (feedUrl) => {
    const response = await axios.post("http://localhost:5000", { url: feedUrl });
    setFeed(response.data);
  };

  return (
    <div>
      <h1>RSS Reader</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="rssUrl"
          id="rssUrl"
          placeholder="https://www.example.com/.rss"
          onChange={(e) => setFeedUrl(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Get content</button>
      </form>
      <h3>Check some of these cool content:</h3>
      <ul>
        <li>
          <button onClick={() => getFeed("https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss")}>
            Nasa Image of the Day
          </button>
        </li>
        <li>
          <button onClick={() => getFeed("https://css-tricks.com/feed/")}>CSS Tricks</button>
        </li>
      </ul>
      <main id="feed">
        <section>
          {feed.map((item) => {
            return (
              <div key={item.guid}>
                <img src={item.enclosure ? item.enclosure.url : ""} />
                <h2>{item.title}</h2>
                <small>{item.isoDate}</small>
                <p>{item.contentSnippet}</p>
                <button>View Article</button>
                <a target="_blank" rel="noreferrer" href={item.link}>
                  <button>Go to article</button>
                </a>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
