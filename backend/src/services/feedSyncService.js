const IOC = require("../models/IOC");

const syncFeed = async (feedData) => {
noe 
  let inserted = 0;
  let skipped = 0;

  for (const ioc of feedData) {

    try {

      await IOC.create(ioc);

      inserted++;

    } catch (error) {

      if (error.code === 11000) {

        skipped++;

      } else {

        console.error(error.message);

      }

    }

  }

  return {
    inserted,
    skipped
  };

};

module.exports = syncFeed;