const RSSParser = require("rss-parser");
const parser = new RSSParser();
const { DateTime } = require("luxon");

const handleRss = {
  getFeedItems: async (feedUrl) => {
    const feed = await parser.parseURL(feedUrl);
    const items = feed.items;
    const feedItems = items
      .filter((item) => {
        if (!item.contentSnippet) {
          return false;
        }
        return true;
      })
      .map((item) => {
        const dt = DateTime.fromISO(item.isoDate);
        let itemDate = `${dt.c.month}/${dt.c.day}/${dt.c.year}`;

        return { ...item, itemDate };
      })
      .sort((a, b) => {
        DateTime.fromISO(a.isoDate) - DateTime.fromISO(b.isoDate);
      });
    return feedItems;
  },
};

module.exports = handleRss;
