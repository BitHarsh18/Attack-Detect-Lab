const IOC = require("../models/IOC");

const getDashboardStats = async (req, res) => {

  try {

    // =========================
    // Overall Statistics
    // =========================

    const totalIOCs = await IOC.countDocuments();

    const critical = await IOC.countDocuments({
      severity: "critical"
    });

    const high = await IOC.countDocuments({
      severity: "high"
    });

    const medium = await IOC.countDocuments({
      severity: "medium"
    });

    const low = await IOC.countDocuments({
      severity: "low"
    });

    // =========================
    // IOC Type Statistics
    // =========================

    const ipCount = await IOC.countDocuments({
      type: "ip"
    });

    const domainCount = await IOC.countDocuments({
      type: "domain"
    });

    const urlCount = await IOC.countDocuments({
      type: "url"
    });

    const hashCount = await IOC.countDocuments({
      type: "hash"
    });

    // =========================
    // Source Statistics
    // =========================

    const sourceStats = await IOC.aggregate([
      {
        $group: {
          _id: "$source",
          count: {
            $sum: 1
          }
        }
      }
    ]);

    // =========================
    // Response
    // =========================

    res.status(200).json({
      success: true,
      dashboard: {

        totalIOCs,

        severity: {
          critical,
          high,
          medium,
          low
        },

        type: {
          ip: ipCount,
          domain: domainCount,
          url: urlCount,
          hash: hashCount
        },

        sources: sourceStats

      }
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

module.exports = {
  getDashboardStats
};