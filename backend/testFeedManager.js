const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const syncAllFeeds = require("./src/feeds/feedManager");

dotenv.config();

(async () => {

  await connectDB();

  const result = await syncAllFeeds();

  console.log(result);

  process.exit();

})();