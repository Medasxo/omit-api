const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("API works")
});

app.post("/omit", (req, res) => {
  const { initialString, removableLetter } = req.body;
  const removableLetterUpperCase = removableLetter.toUpperCase();
  const removableLetterLowerCase = removableLetter.toLowerCase();
  const omittedString = initialString
    .replace(new RegExp(removableLetterLowerCase, "g"), "")
    .replace(new RegExp(removableLetterUpperCase, "g"), "");
  res.send(omittedString);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
