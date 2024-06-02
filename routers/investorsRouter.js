const express = require("express");
const router = express.Router();
const checkJwt = require("../utilities");

class InvestorsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // Get all investors from the investors table. Not likely to be used
    // router.get("/", checkJwt, this.controller.getAll.bind(this.controller));
    router.get(
      "/:investorId",
      checkJwt,
      this.controller.getOne.bind(this.controller)
    );
    router.post("/", checkJwt, this.controller.addOne.bind(this.controller));
    router.put(
      "/:investorId",
      checkJwt,
      this.controller.editOne.bind(this.controller)
    );
    router.delete(
      "/:investorId",
      checkJwt,
      this.controller.deleteOne.bind(this.controller)
    );
    return router;
  }
}

module.exports = InvestorsRouter;
