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

  // router.get("/", this.controller.getAll.bind(this.controller));
  //   router.get("/:investorId", this.controller.getOne.bind(this.controller));
  //   router.post("/", this.controller.addOne.bind(this.controller));
  //   router.put("/:investorId", this.controller.editOne.bind(this.controller));
  //   router.delete(
  //     "/:investorId",
  //     this.controller.deleteOne.bind(this.controller)
  //   );
}

module.exports = InvestorsController;
