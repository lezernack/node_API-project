const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", myController.ttechFunction);

// student routes
routes.use("/students", require("./students"));

module.exports = routes;
