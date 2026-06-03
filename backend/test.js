const fetchURLHausFeed = require("./src/feeds/urlhausFeed");

(async () => {
  try {
    const data = await fetchURLHausFeed();

    console.log("Feed Response:");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();