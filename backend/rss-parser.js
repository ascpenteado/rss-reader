const RSSParser = require("rss-parser");
const parser = new RSSParser();

export const handleRss = {
  parseFeed: async () => {
    const feed = await parser.parseURL("https://www.reddit.com/.rss");
    console.log(feed.title);

    feed.items.forEach((item) => {
      console.log(item.title + ":" + item.link);
    });
  },
};
