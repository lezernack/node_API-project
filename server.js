const express = require("express");
const cors = require("cors");
const mongodb = require("./db/connect");

const app = express();
const PORT = process.env.PORT || 3001;

app
  .use(cors())
  .use(express.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow_Origin", "*");
    next();
  })
  .use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(
        "\x1b[35m%s\x1b[0m",
        `Connected to DB and listening on ${PORT}`
      );
    });
  }
});
