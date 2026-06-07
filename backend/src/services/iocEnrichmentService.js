const enrichIOC = (ioc) => {

  let threatScore = 0;

  switch (ioc.severity) {
    case "low":
      threatScore = 25;
      break;

    case "medium":
      threatScore = 50;
      break;

    case "high":
      threatScore = 75;
      break;

    case "critical":
      threatScore = 100;
      break;

    default:
      threatScore = 0;
  }

  return {
    ...ioc.toObject(),
    threatScore,
    riskLevel:
      threatScore >= 75
        ? "High"
        : threatScore >= 50
        ? "Medium"
        : "Low"
  };
};

module.exports = enrichIOC;