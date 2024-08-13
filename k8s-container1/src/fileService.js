const axios = require("axios");
const path = require("path");
const fs = require("fs");

const validateFileExists = async (req) => {
  let { file, product } = req;
  if (!file || !product) {
    throw new Error("Invalid JSON input.");
  }
  const dataPath = "/Tanuj_PV_dir";
  const filePath = path.join(dataPath, file);
  if (!fs.existsSync(filePath)) {
    throw new Error("File not found.");
  }
};

const executeApiCall = async (req) => {
  console.log("Called APIIIIII 111");
  const { data } = await axios.post("http://container2-service/calculate", req);
  return data;
};

const storeService = async (fileName, fileData) => {
  if (!fileName) {
    throw new Error("Invalid JSON input.");
  }
  const dataPath = "/Tanuj_PV_dir";
  const filePath = path.join(dataPath, fileName);

  if (!fs.existsSync(filePath)) {
    fs.writeFile(filePath, fileData, (err) => {
      if (err) {
        throw new Error("Error while storing the file to the storage.");
      }
      console.log(`File ${fileName} has been saved successfully!`);
    });
  } else {
    console.log("File already exists");
  }
};

module.exports = { validateFileExists, executeApiCall, storeService };
