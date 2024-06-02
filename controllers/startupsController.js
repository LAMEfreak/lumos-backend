const BaseController = require("./baseController");

class StartupsController extends BaseController {
  constructor(model, round, investor, roundinvestor) {
    super(model);
  }

  async addOne(req, res) {
    console.log(req.body);
    const { email, auth0Id } = req.body;
    try {
      const newStartup = await this.model.create({
        email,
        auth0Id,
      });
      return res.json(newStartup);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = StartupsController;
