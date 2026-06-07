const enrichIOC = require("../services/iocEnrichmentService");
const IOC = require("../models/IOC");

const createIOC = async (req, res) => {
  try {
    console.log("Creating IOC with data:", req.body);
    const ioc = await IOC.create(req.body);

    res.status(201).json({
      success: true,
      data: ioc
    });
  } catch (error) {

  if (error.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "IOC already exists"
    });
  }

  res.status(500).json({
    success: false,
    message: error.message
  });
}
};

const getIOCs = async (req, res) => {
  try {
    const iocs = await IOC.find();

    res.status(200).json({
      success: true,
      count: iocs.length,
      data: iocs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const searchIOC = async (req, res) => {
  try {
    const { value } = req.params;

    const ioc = await IOC.findOne({
      value: value
    });

    if (!ioc) {
      return res.status(404).json({
        success: false,
        found: false,
        message: "IOC not found"
      });
    }

    const enrichedIOC = enrichIOC(ioc);

res.status(200).json({
  success: true,
  found: true,
  data: enrichedIOC
});
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
const getIOCStats = async (req, res) => {
  try {

    const totalIOCs = await IOC.countDocuments();

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

    res.status(200).json({
      success: true,
      stats: {
        totalIOCs,
        ipCount,
        domainCount,
        urlCount,
        hashCount
      }
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const getRecentIOCs = async (req, res) => {
  try {

    const recentIOCs = await IOC.find()
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: recentIOCs.length,
      data: recentIOCs
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const deleteIOC = async (req, res) => {
  try {

    const { value } = req.params;

    const deletedIOC = await IOC.findOneAndDelete({
      value: value
    });

    if (!deletedIOC) {
      return res.status(404).json({
        success: false,
        message: "IOC not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "IOC deleted successfully",
      data: deletedIOC
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

module.exports = {
  createIOC,
  getIOCs,
  searchIOC,
  getIOCStats,
  deleteIOC,
  getRecentIOCs
};