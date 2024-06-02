const express = require("express");
const router = express.Router();
const checkJwt = require("../utilities");

class StartupsRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }
  routes() {
    // No DELETE user/startup for now
    router.get(
      "/:startupId",
      checkJwt,
      this.controller.getOneStartup.bind(this.controller)
    );
    router.post(
      "/",
      checkJwt,
      this.controller.addOneStartup.bind(this.controller)
    );
    router.put(
      "/:startupId",
      checkJwt,
      this.controller.editOneStartup.bind(this.controller)
    );

    // Funding rounds
    router.get(
      "/:startupId/rounds",
      checkJwt,
      this.controller.getAllRounds.bind(this.controller)
    );
    router.get(
      "/:startupId/:roundId",
      checkJwt,
      this.controller.getOneRound.bind(this.controller)
    );
    router.post(
      "/:startupId/rounds",
      checkJwt,
      this.controller.addOneRound.bind(this.controller)
    );
    router.put(
      "/:startupId/:roundId",
      checkJwt,
      this.controller.editOneRound.bind(this.controller)
    );
    router.delete(
      "/:startupId/:roundId",
      checkJwt,
      this.controller.deleteOneRound.bind(this.controller)
    );

    // WHEN ADDING INVESTOR TO A ROUND, ADD RECORD IN ROUND_INVESTOR JUNCTION TABLE
    // when deleting a round, delete all records in round_investor junction table
    // when removing an ivnestor from a round, delete record in round_investor junction table

    // router.get(
    //   "/:startupId/:roundId/investors",
    //   this.controller.getAll.bind(this.controller)
    // );
    // router.get(
    //   "/:startupId/:roundId/:investorId",
    //   this.controller.getOne.bind(this.controller)
    // );
    // router.post(
    //   "/:startupId/:roundId/investors",
    //   this.controller.addOne.bind(this.controller)
    // );
    // router.put(
    //   "/:startupId/:roundId/:investorId",
    //   this.controller.editOne.bind(this.controller)
    // );
    // router.delete(
    //   "/:startupId/rounds/:roundId/:investorId",
    //   this.controller.deleteOne.bind(this.controller)
    // );
    return router;
  }
}

module.exports = StartupsRouter;
