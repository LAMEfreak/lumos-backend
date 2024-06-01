const express = require("express");
const cors = require("cors");
require("dotenv").config();

// importing Routers that define the url endpoints for the frontend to consume
import InvestorsRouter from "./routers/investorsRouter";
import StartupsRouter from "./routers/startupsRouter";

// importing Controllers that query the Sequelize data
import StartupsController from "./controllers/startupsController";
import InvestorsController from "./controllers/investorsController";

// importing Sequelize models
import db from "./db/models/index";
const { startup, investor, round, roundinvestor } = db;

// initialize Controllers -> note the lowercase for the first word
// Pass in models to perform operations on the database
// startupsController handles CRUD of startups, rounds and tagging of investors to funding rounds
// investorController handles CRUD of investor
const startupsController = new StartupsController(
  startup,
  round,
  investor,
  roundinvestor
);
const investorsController = new InvestorsController(investor);

// initialize Routers
const investorsRouter = new InvestorsRouter(InvestorsController).routes();
const startupsRouter = new StartupsRouter(StartupsController).routes();

const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
app.use(cors());

// parse JSON bodies of incoming POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware passes request to the appropriate router
app.use("/startup", startupsRouter);
app.use("/investors", investorsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
