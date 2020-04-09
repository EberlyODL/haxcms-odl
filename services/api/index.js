const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { items } = require("./services.js");
const _ = require("lodash")

async function main() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    res.send("ok")
  });

  app.get("/items", (req, res) => {
    const { query } = req;
    let tags = null;
    let operator = "or";
    let includeContent = true;
    let parent = null;
    // check if their are any tags specified
    if (_.has(query, 'tags')) {
      tags = query.tags.split(',');
    }
    if (_.has(query, 'operator')) {
      operator = query.operator;
    }
    if (_.has(query, 'includeContent')) {
      includeContent = query.includeContent;
    }
    if (_.has(query, 'parent')) {
      parent = query.parent;
    }
    res.json(items({ tags, operator, includeContent, parent }))
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