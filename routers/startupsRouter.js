const express = require("express");
const router = express.Router();

class StartupsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get(
      "/:startupId",
      this.controller.getOne.bind(this.controller)
    );
    router.post(
      "/",
      this.controller.addOne.bind(this.controller)
    );
    router.put(
      "/:startupId",
      this.controller.editOne.bind(this.controller)
    );

    // Funding rounds
    router.get(
      "/:startupId/rounds",
      this.controller.getAll.bind(this.controller)
    );
    router.get(
      "/:startupId/rounds/:roundId",
      this.controller.getOne.bind(this.controller)
    );
    router.post(
      "/:startupId/rounds",
      this.controller.addOne.bind(this.controller)
    );
    router.put(
      "/:startupId/rounds/:roundId",
      this.controller.editOne.bind(this.controller)
    );
    router.delete(
      "/:startupId/rounds/:roundId",
      this.controller.deleteOne.bind(this.controller)
    );
    return router;
  }
}

module.exports = StartupsRouter;
