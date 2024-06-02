const BaseController = require("./baseController");

class InvestorsController extends BaseController {
  constructor(model) {
    super(model);
  }

  async addOne(req, res) {
    const { name, type, company, stage, email } = req.body;
    try {
      const newInvestor = await this.model.create({
        name,
        type,
        company,
        stage,
        email,
      });
      return res.json(newInvestor);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // Get all investors from the investors table. Not likely to be used
  /*
    async getAll(req, res) {
      try {
        const result = await this.model.findAll();
        return res.json(result);
      } catch (err) {
        return res.status(400).json({ error: true, msg: err });
      }
    }
  */

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
