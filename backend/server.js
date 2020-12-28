const express = require("express");
const app = express();
const handleRss = require("./rss-parser");
const cors = require("cors");

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const rssUrl = req.body.url;
  if (rssUrl) {
    const feed = await handleRss.parseFeed(rssUrl);
    return res.json(feed);
  } else {
    return res.status(400).json({ message: "URL can't be empty" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
