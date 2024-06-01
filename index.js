const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { auth } = require("express-oauth2-jwt-bearer");

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: "https://lumos/api",
  issuerBaseURL: `https://dev-wnqp04xircjjnguk.us.auth0.com/`,
});

// importing Routers that define the url endpoints for the frontend to consume
const InvestorsRouter = require("./routers/investorsRouter");
const StartupsRouter = require("./routers/startupsRouter");

// importing Controllers that query the Sequelize data
const StartupsController = require("./controllers/startupsController");
const InvestorsController = require("./controllers/investorsController");

// importing Sequelize models
const db = require("./db/models/index");
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
const investorsRouter = new InvestorsRouter(
  investorsController,
  checkJwt
).routes();
const startupsRouter = new StartupsRouter(
  startupsController,
  checkJwt
).routes();

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
