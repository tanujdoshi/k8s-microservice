const {
  validateFileExists,
  executeApiCall,
  storeService,
} = require("./fileService.js");
const { errorHandler } = require("./errorHandler.js");
const { extname } = require("path");

const calculateProduct = async (req, res) => {
  const requestBody = req.body;
  try {
    await validateFileExists(requestBody);
    const data = await executeApiCall(requestBody);
    console.log("DATAAA from 2 : ", data, extname(requestBody.file) != "csv");
    if ((!data.sum || data.sum === 0) && extname(requestBody.file) != "csv") {
      console.log("In errrror?");
      throw new Error("Input file not in CSV format.");
    }
    res.json(data);
  } catch (error) {
    errorHandler(error, requestBody, res);
  }
};

const storeFile = async (req, res) => {
  const requestBody = req.body;

  try {
    // await validateFileExists(requestBody);
    await storeService(requestBody.file, requestBody.data);
    res.json({
      file: requestBody.file,
      message: "Success.",
    });
  } catch (error) {
    errorHandler(error, requestBody, res);
  }
};

module.exports = { calculateProduct, storeFile };
