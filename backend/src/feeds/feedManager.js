// Collect indicators
// Normalize them
// Store them

const fetchURLHausFeed = require("./urlhausFeed");

const syncAllFeeds = async () => {
  console.log("========== Feed Manager ==========");

  try {
    const urlhausData = await fetchURLHausFeed();

    console.log("URLHaus Feed Status: Success");

    return {
      success: true,
      source: "URLHaus",
      data: urlhausData
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