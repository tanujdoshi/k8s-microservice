const express = require("express");
const app = express();
const port = 6000;
const { calculateProduct, storeFile } = require("./src/fileController.js");

app.use(express.json());
app.get("/", (req, res) => {
  res.json("Hello From Container1 ");
  console.log("From container 1");
});

app.post("/store-file", storeFile);
app.post("/calculate", calculateProduct);
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
