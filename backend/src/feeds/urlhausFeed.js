const axios = require("axios");

const fetchURLHausFeed = async () => {
  try {
    console.log("Fetching URLHaus Feed...");

    const response = await axios.post(
      "https://urlhaus-api.abuse.ch/v1/urls/recent/"
    );

    return response.data;
  } catch (error) {
  console.error("Status:", error.response?.status);
  console.error("Data:", error.response?.data);
}
};

module.exports = fetchURLHausFeed;