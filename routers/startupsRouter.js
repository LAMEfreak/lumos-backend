const express = require("express");
const router = express.Router();

class StartupsRouter {
  constructor(controller, checkJwt) {
    this.controller = controller;
    this.checkJwt = checkJwt;
  }
  routes() {
    // router.get("/:startupId", this.controller.getOne.bind(this.controller));
    // router.post("/", this.controller.addOne.bind(this.controller));
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

    // WHEN STARTUP ADDS INVESTOR, CALL POST TO /INVESTOR TO CREATE A RECROD
    // THEN, add record in startup_investor junction table to create the association between the startup and the investor
    // const startup = await this.model.findOne({where: {name}});
    // const investors = await this.investorModel.findAll({ where: { name: ['Investor Name 1', 'Investor Name 2'] } });
    // await startup.addInvestor(investors);

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
