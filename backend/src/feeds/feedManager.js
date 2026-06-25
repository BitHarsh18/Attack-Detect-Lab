// Collect indicators
// Normalize them
// Store them

const fetchURLHausFeed = require("./urlhausFeed");
const syncFeed = require("../services/feedSyncService");

const syncAllFeeds = async () => {

  console.log("========== Feed Manager ==========");

  try {

    const urlhausData = await fetchURLHausFeed();

    console.log(`Fetched ${urlhausData.length} indicators`);

    const result = await syncFeed(urlhausData);

    console.log("URLHaus Feed Status: Success");

    return {
      success: true,
      source: "URLHaus",
      inserted: result.inserted,
      skipped: result.skipped
    };

  } catch (error) {

    console.log("URLHaus Feed Status: Failed");

    return {
      success: false,
      source: "URLHaus",
      error: error.message
    };

  }

};

module.exports = syncAllFeeds;