const express = require("express");

const controller = require("../controllers/iocController");

console.log(controller);

const router = express.Router();

router.post("/", controller.createIOC);

router.get("/", controller.getIOCs);

router.get("/search/:value", controller.searchIOC);

module.exports = router;