const axios = require("axios");

const fetchURLHausFeed = async () => {

  try {

    console.log("Fetching URLHaus Feed...");

    const response = await axios.get(
      "https://urlhaus.abuse.ch/downloads/json_recent/"
    );

    const data = response.data;

    const feed = [];

    for (const key in data) {

      const item = data[key][0];

      feed.push({
        value: item.url,
        type: "url",
        threatType: item.threat || "malware",
        source: "URLHaus",
        severity: "critical"
      });

    }

    return feed;

  } catch (error) {

    console.error(error.message);

    return [];

  }

};

module.exports = fetchURLHausFeed;