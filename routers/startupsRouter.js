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
    // when removing an ivnestor from a round, delete record in round_investor junction table

    // router.get(
    //   "/:startupId/:roundId/roundInvestors",
    //   this.controller.getAllRoundInvestors.bind(this.controller)
    // );
    // router.get(
    //   "/:startupId/:roundId/:roundInvestorId",
    //   this.controller.getOneRoundInvestor.bind(this.controller)
    // );
    // router.post(
    //   "/:startupId/:roundId/roundInvestors",
    //   this.controller.addOneRoundInvestor.bind(this.controller)
    // );
    // router.put(
    //   "/:startupId/:roundId/:roundInvestorId",
    //   this.controller.editOneRoundInvestor.bind(this.controller)
    // );
    // router.delete(
    //   "/:startupId/rounds/:roundId/:roundInvestorId",
    //   this.controller.deleteOneRoundInvestor.bind(this.controller)
    // );
    return router;
  }
}

module.exports = StartupsRouter;
