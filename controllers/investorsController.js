const BaseController = require("./baseController");

class InvestorsController extends BaseController {
  constructor(model, startupModel) {
    super(model);
    this.startupModel = startupModel;
  }

  async addOne(req, res) {
    const { name, type, company, stage, email, auth0Id } = req.body;
    console.log("auth0Id:", auth0Id);

    try {
      const newInvestor = await this.model.create({
        name,
        type,
        company,
        stage,
        email,
      });

      // add record to startup_investor junction table to create association
      const startup = await this.startupModel.findOne({
        where: { auth0_id: auth0Id },
      });
      const investor = await this.model.findByPk(newInvestor.dataValues.id);
      await startup.addInvestor(investor);

      return res.json(newInvestor);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getAll(req, res) {
    const { startupId } = req.params;
    const startup = await this.startupModel.findOne({
      where: { auth0_id: startupId },
    });
    try {
      const investors = await startup.getInvestors();
      return res.json(investors);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOne(req, res) {
    const { investorId } = req.params;
    try {
      const result = await this.model.findByPk(investorId);
      return res.json(result);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async editOne(req, res) {
    const { investorId } = req.params;
    const { name, type, company, stage, email } = req.body;
    try {
      const investorToEdit = await this.model.findByPk(investorId);
      if (investorToEdit)
        await investorToEdit.update({
          name,
          type,
          company,
          stage,
          email,
        });
      return res.json(investorToEdit);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteOne(req, res) {
    const { investorId } = req.params;
    try {
      const result = await this.model.destroy({
        where: { id: investorId },
      });

      if (!result) {
        return res.status(404).json({ error: true, msg: "Investor not found" });
      }

      return res.json(`deleted.`);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = InvestorsController;
