const { calculateSum } = require("./fileService.js");
const { errorHandler } = require("./errorHandler.js");

const calculateProduct = async (req, res) => {
  const requestBody = req.body;
  try {
    const sum = await calculateSum(requestBody);

    res.json({
      file: requestBody.file,
      sum,
    });
  } catch (error) {
    console.log("Error from catch", error);
    errorHandler(error, requestBody, res);
  }
};

module.exports = { calculateProduct };
