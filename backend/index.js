require("dotenv").config();
const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./src/helpers/mongoose");

const app = express();

const report = require("./src/routes/report");
const sendingHistory = require("./src/routes/sendingHistory");
const template = require("./src/routes/template");
const user = require("./src/routes/user");
const validation = require("./src/routes/validation");

app.use(express.static("public"));
app.use(cors());
app.use(
  express.json({
    extended: true,
    limit: "60mb",
  }),
);
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/user", user);
app.use("/report", report);
app.use("/sendingHistory", sendingHistory);
app.use("/template", template);
app.use("/validation", validation);
app.use("*", (_, res, __) => res.status(404).send("Resource not found"));

const port = process.env.PORT || 3006;

db.once("open", () => {
  app.listen(port, () =>
    console.log(`Listening on port ${port} ...`),
  );
});
