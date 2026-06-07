const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const syncFeed = require("./src/services/feedSyncService");

dotenv.config();

const fakeFeed = [
  {
    value: "192.168.1.100",
    type: "ip",
    severity: "high",
    source: "testFeed"
  },

  {
    value: "evil-domain.com",
    type: "domain",
    severity: "critical",
    source: "testFeed"
  },

  {
    value: "185.220.101.45",
    type: "ip",
    severity: "high",
    source: "testFeed"
  }
];

(async () => {

  await connectDB();

  const result = await syncFeed(fakeFeed);

  console.log(result);

  process.exit();

})();