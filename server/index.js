const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = 3001;

const app = express();

app.use(json());
app.use(cors());

//------------- start of endpoints --------------

app.get("/api/test", (req, res) => {
  res.status(200).send("working");
});

//------------- end of endpoints ----------------
app.listen(port, () => {
  console.log(`server is on port ${port}`);
});
