import RSSParser from "rss-parser";
import { DateTime } from "luxon";
const parser = new RSSParser();

const getFeedItems = async (feedUrl) => {
  if (feedUrl) {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const feed = await parser.parseURL(CORS_PROXY + feedUrl);
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
      .sort((a, b) => DateTime.fromISO(b.isoDate) - DateTime.fromISO(a.isoDate));
    return feedItems;
  }
};

export default getFeedItems;
