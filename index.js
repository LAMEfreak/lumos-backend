const express = require("express");
const cors = require("cors");
require("dotenv").config();

// =============== STREAM ================= //

const { StreamClient } = require("@stream-io/node-sdk");
const checkJwt = require("./utilities");

// =============== STREAM ================= //

// importing Routers that define the url endpoints for the frontend to consume
const InvestorsRouter = require("./routers/investorsRouter");
const StartupsRouter = require("./routers/startupsRouter");

// importing Controllers that query the Sequelize data
const StartupsController = require("./controllers/startupsController");
const InvestorsController = require("./controllers/investorsController");

// importing Sequelize models
const db = require("./db/models/index");
const { startup, investor, round, RoundInvestor } = db;

// initialize Controllers -> note the lowercase for the first word
// Pass in models to perform operations on the database
// startupsController handles CRUD of startups, rounds and tagging of investors to funding rounds
// investorController handles CRUD of investor
const startupsController = new StartupsController(
  startup,
  round,
  RoundInvestor,
  investor
);
const investorsController = new InvestorsController(investor, startup);

// initialize Routers
const investorsRouter = new InvestorsRouter(investorsController).routes();
const startupsRouter = new StartupsRouter(startupsController).routes();

const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
app.use(cors());

// parse JSON bodies of incoming POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// weird bug that affects getOne in investorsController
// app.get("/investors/:investorId", investorsController.getOne);

// Middleware passes request to the appropriate router
app.use("/startup", startupsRouter);
app.use("/investors", investorsRouter);

// =============== STREAM ================= //

const apiKey = process.env.STREAM_API_KEY;
const secret = process.env.STREAM_SECRET_KEY;
// optionally add timeout to API requests
// the default timeout is 3000ms
client = new StreamClient(apiKey, secret, { timeout: 3000 });

app.post("/stream/:userId", checkJwt, async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, image } = req.body;
    const newUser = {
      id: userId,
      role: "user",
      name,
      image,
    };
    await client.upsertUsers({
      users: {
        [newUser.id]: newUser,
      },
    });
    // Set expiration time to 1 hour
    const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60;
    // account for slight discrepancies in system clocks between different servers or systems
    // providing a buffer to ensure that the "issued at" time is not in the future from the perspective of any system verifying the token.
    const issuedAt = Math.floor(Date.now() / 1000) - 60;
    const token = client.createToken(userId, expirationTime, issuedAt);
    console.log("STREAM TOKEN", token);
    res.json(token);
  } catch (error) {
    console.log(error);
  }
});

// =============== STREAM ================= //

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
