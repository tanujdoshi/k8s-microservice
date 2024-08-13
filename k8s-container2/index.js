const express = require("express");
const app = express();
const port = 8000;
const { calculateProduct } = require("./src/fileController.js");

app.use(express.json());
app.get("/", (req, res) => {
  res.json("Hello From Container2 ");
  console.log("From container 2");
});
app.post("/calculate", calculateProduct);
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
