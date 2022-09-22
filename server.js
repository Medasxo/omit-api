const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/omit", (req, res) => {
  const { initialString, removableLetter } = req.body;
  const removableLetterUpperCase = removableLetter.toUpperCase();
  const removableLetterLowerCase = removableLetter.toLowerCase();
  const omittedString = initialString
    .replace(new RegExp(removableLetterLowerCase, "g"), "")
    .replace(new RegExp(removableLetterUpperCase, "g"), "");
  res.send(omittedString);
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
