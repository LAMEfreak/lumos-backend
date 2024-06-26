const BaseController = require("./baseController");

class StartupsController extends BaseController {
  constructor(model, roundModel, RoundInvestorModel, investorModel) {
    super(model);
    this.roundModel = roundModel;
    this.RoundInvestorModel = RoundInvestorModel;
    this.investorModel = investorModel;
  }

  async getOneStartup(req, res) {
    const { startupId } = req.params;
    try {
      const result = await this.model.findOne({
        where: { auth0_id: startupId },
      });
      return res.json(result);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addOneStartup(req, res) {
    const { email, auth0Id } = req.body;
    try {
      const existingStartup = await this.model.findOne({
        where: { auth0_id: auth0Id },
      });
      if (!existingStartup) {
        const newStartup = await this.model.create({
          email,
          auth0Id,
        });
        return res.json(newStartup);
      } else {
        return res.json(`Record already exists.`);
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async editOneStartup(req, res) {
    const { startupId } = req.params;
    const { name, email, industry } = req.body;
    try {
      const startupToEdit = await this.model.findOne({
        where: {
          auth0Id: startupId,
        },
      });
      if (startupToEdit)
        await startupToEdit.update({
          name,
          email,
          industry,
        });
      return res.json(startupToEdit);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getAllRounds(req, res) {
    const { startupId } = req.params;
    const startup = await this.model.findOne({
      where: { auth0_id: startupId },
    });
    console.log(startup);
    try {
      const rounds = await startup.getRounds();
      return res.json(rounds);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOneRound(req, res) {
    const { roundId } = req.params;
    try {
      const result = await this.roundModel.findByPk(roundId);
      return res.json(result);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addOneRound(req, res) {
    const { startupId } = req.params;
    const { name, description, stage, target } = req.body;

    console.log(`here`);
    try {
      const existingStartup = await this.model.findOne({
        where: { auth0_id: startupId },
      });
      if (existingStartup) {
        const currentStartupId = await existingStartup.dataValues.id;
        const newRound = await this.roundModel.create({
          name,
          description,
          stage,
          target,
          startupId: currentStartupId,
        });
        return res.json(newRound);
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async editOneRound(req, res) {
    const { roundId } = req.params;
    const { name, description, stage, target } = req.body;
    try {
      const roundToEdit = await this.roundModel.findByPk(roundId);
      if (roundToEdit) {
        const editedRound = await roundToEdit.update({
          name,
          description,
          stage,
          target,
        });
        return res.json(editedRound);
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteOneRound(req, res) {
    const { roundId } = req.params;
    try {
      const result = await this.roundModel.destroy({
        where: { id: roundId },
      });
      if (!result) {
        return res.status(404).json({ error: true, msg: "Round not found" });
      }
      return res.json(`deleted.`);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getAllRoundInvestors(req, res) {
    const { roundId } = req.params;
    try {
      const result = await this.RoundInvestorModel.findAll({
        where: { round_id: roundId },
        include: [
          {
            model: this.investorModel,
            attributes: ["name", "type", "company", "email"],
          },
        ],
      });
      return res.json(result);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOneRoundInvestor(req, res) {
    const { roundInvestorId } = req.params;
    try {
      const result = await this.RoundInvestorModel.findOne({
        where: { id: roundInvestorId },
      });
      return res.json(result);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addOneRoundInvestor(req, res) {
    const { raised, committed, roundId, investorId } = req.body;
    try {
      const result = await this.RoundInvestorModel.create({
        roundId,
        investorId,
        raised,
        committed,
      });
      return res.json(result);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async editOneRoundInvestor(req, res) {
    const { roundInvestorId } = req.params;
    const { raised, committed } = req.body;
    console.log(raised, committed);
    try {
      const roundInvestorToEdit = await this.RoundInvestorModel.findByPk(
        roundInvestorId
      );
      if (roundInvestorToEdit) {
        const editedRoundInvestor = await roundInvestorToEdit.update({
          raised,
          committed,
        });
        return res.json(editedRoundInvestor);
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteOneRoundInvestor(req, res) {
    const { roundInvestorId } = req.params;
    try {
      const result = await this.RoundInvestorModel.destroy({
        where: { id: roundInvestorId },
      });
      return res.json(`deleted.`);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = StartupsController;
