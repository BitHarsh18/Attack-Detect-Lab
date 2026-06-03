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

    res.status(200).json({
      success: true,
      found: true,
      data: ioc
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
  searchIOC
};