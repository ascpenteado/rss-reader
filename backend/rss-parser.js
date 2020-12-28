const RSSParser = require("rss-parser");
const parser = new RSSParser();

const handleRss = {
  parseFeed: async (feedUrl) => {
    const feed = await parser.parseURL(feedUrl);
    return feed.items;
  },
};

module.exports = handleRss;
