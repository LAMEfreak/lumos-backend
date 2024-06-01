const express = require("express");
const router = express.Router();

class InvestorsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:investorId", this.controller.getOne.bind(this.controller));
    router.post("/", this.controller.addOne.bind(this.controller));
    router.put("/:investorId", this.controller.editOne.bind(this.controller));
    router.delete(
      "/:investorId",
      this.controller.deleteOne.bind(this.controller)
    );
    return router;
  }
}

module.exports = InvestorsRouter;
