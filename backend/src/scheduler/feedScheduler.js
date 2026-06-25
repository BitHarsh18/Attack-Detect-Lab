const cron = require("node-cron");

const syncAllFeeds = require("../feeds/feedManager");

const startFeedScheduler = () => {

  cron.schedule("0 * * * *", async () => {

    console.log("Running Scheduled Feed Sync...");

    const result = await syncAllFeeds();

    console.log(result);

  });

};

module.exports = startFeedScheduler;