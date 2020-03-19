const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { faqs } = require("./services.js");

async function main() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    res.send("ok")
  });

  app.get("/faqs", (req, res) => {
    res.json(faqs())
  });

  app.listen(3000, () => {
    console.log(
      `🚀 Server ready at http://localhost:3000`
    );
  });
}

main()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {});