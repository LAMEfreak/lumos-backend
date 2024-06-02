const BaseController = require("./baseController");

class StartupsController extends BaseController {
  constructor(model, round, investor, roundinvestor) {
    super(model);
  }

  async getOneStartup(req, res) {
    const { startupId } = req.params;
    console.log(req.params);
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
}

module.exports = StartupsController;
