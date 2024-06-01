const express = require("express");
const router = express.Router();

class InvestorsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get(
      "/investors",
      this.controller.getAll.bind(this.controller)
    );
    router.get(
      "/investors/:investorId",
      this.controller.getOne.bind(this.controller)
    );
    router.post(
      "/investors",
      this.controller.addOne.bind(this.controller)
    );
    router.put(
      "/investors/:investorId",
      this.controller.editOne.bind(this.controller)
    );
    router.delete(
      "/investors/:investorId",
      this.controller.deleteOne.bind(this.controller)
    );
    return router;
  }
}

module.exports = InvestorsRouter;
