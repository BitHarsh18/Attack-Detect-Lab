const enrichIOC = require("./src/services/iocEnrichmentService");

const ioc = {
  value: "185.220.101.45",
  type: "ip",
  severity: "medium",
  source: "abuse.ch",

  toObject() {
    return {
      value: this.value,
      type: this.type,
      severity: this.severity,
      source: this.source
    };
  }
};

const result = enrichIOC(ioc);

console.log(result);