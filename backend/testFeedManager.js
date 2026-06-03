const syncAllFeeds = require("./src/feeds/feedManager");

(async () => {
  const result = await syncAllFeeds();

  console.log(result);
})();