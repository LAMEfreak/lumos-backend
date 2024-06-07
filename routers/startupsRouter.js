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

    // OK!! WHEN DELETING ROUND, DELETING ALL ASSOCIATED TAGGED INVESTORS IN JUNCTION TBALE
    // OK!! WHEN DELETING INVESTOR, DELETE ALL INVESTOR RECORD ACROSS ALL ROUNDS IN JUNCTION TABLE

    router.get(
      "/:startupId/roundInvestors/:roundId",
      checkJwt,
      this.controller.getAllRoundInvestors.bind(this.controller)
    );
    router.get(
      "/:startupId/roundInvestors/:roundInvestorId",
      checkJwt,
      this.controller.getOneRoundInvestor.bind(this.controller)
    );
    router.post(
      "/:startupId/roundInvestors",
      checkJwt,
      this.controller.addOneRoundInvestor.bind(this.controller)
    );
    router.put(
      "/:startupId/roundInvestors/:roundInvestorId",
      checkJwt,
      this.controller.editOneRoundInvestor.bind(this.controller)
    );
    router.delete(
      "/:startupId/roundInvestors/:roundInvestorId",
      checkJwt,
      this.controller.deleteOneRoundInvestor.bind(this.controller)
    );
    return router;
  }
}

module.exports = StartupsRouter;
