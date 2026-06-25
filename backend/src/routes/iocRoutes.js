const express = require("express");

const controller = require("../controllers/iocController");

console.log(controller);

const router = express.Router();

router.post("/", controller.createIOC);

router.get("/", controller.getIOCs);

router.get("/recent", controller.getRecentIOCs);

router.get("/stats", controller.getIOCStats);

router.get("/critical", controller.getCriticalIOCs);

router.get("/source/:source", controller.getIOCsBySource);

router.get("/type/:type", controller.getIOCsByType);

router.get("/search/:value", controller.searchIOC);

router.delete("/:value", controller.deleteIOC);
module.exports = router;