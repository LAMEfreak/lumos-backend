const express = require("express");
const router = express.Router();
const checkJwt = require("../utilities");

class StartupsRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }
  routes() {
    router.get(
      "/:startupId",
      checkJwt,
      this.controller.getOneStartup.bind(this.controller)
    );
    router.post("/", checkJwt, this.controller.addOneStartup.bind(this.controller));
    // router.put("/:startupId", this.controller.editOne.bind(this.controller));
    // No DELETE user/startup for now

    // // Funding rounds
    // router.get(
    //   "/:startupId/rounds",
    //   this.controller.getAll.bind(this.controller)
    // );
    // router.get(
    //   "/:startupId/rounds/:roundId",
    //   this.controller.getOne.bind(this.controller)
    // );
    // router.post(
    //   "/:startupId/rounds",
    //   this.controller.addOne.bind(this.controller)
    // );
    // router.put(
    //   "/:startupId/rounds/:roundId",
    //   this.controller.editOne.bind(this.controller)
    // );
    // router.delete(
    //   "/:startupId/rounds/:roundId",
    //   this.controller.deleteOne.bind(this.controller)
    // );

    // WHEN STARTUP EDITS INVESTOR, CALL PUT TO /:INVESTORID TO UPDATE THE RECORD
    // TO GET LIST OF INVESTORS CREATED BY STARTUP, use startup.getInvestors()
    // WHEN DELETING AN INVESTOR, DELETE RECORD IN INVESTOR TABLE AND ALSO ASSOCIATED RECORDS IN STARTUP_INVESTOR JUNCTION TABLE using CASCADE METHOD IN MODEL

    // WHEN ADDING INVESTOR TO A ROUND, ADD RECORD IN ROUND_INVESTOR JUNCTION TABLE

    // router.get(
    //   "/:startupId/rounds/:roundId/investors",
    //   this.controller.getAll.bind(this.controller)
    // );
    // router.get(
    //   "/:startupId/rounds/:roundId/investors/:investorId",
    //   this.controller.getOne.bind(this.controller)
    // );
    // router.post(
    //   "/:startupId/rounds/:roundId/investors",
    //   this.controller.addOne.bind(this.controller)
    // );
    // router.put(
    //   "/:startupId/rounds/:roundId/investors/:investorId",
    //   this.controller.editOne.bind(this.controller)
    // );
    // router.delete(
    //   "/:startupId/rounds/:roundId/investors/:investorId",
    //   this.controller.deleteOne.bind(this.controller)
    // );
    return router;
  }
}

module.exports = StartupsRouter;
