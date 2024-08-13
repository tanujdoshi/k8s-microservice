const readline = require("readline");
const fs = require("fs");
const path = require("path");

const calculateSum = async (req) => {
  let { file, product } = req;
  product = product.toLowerCase().trim();

  const dataPath = "/Tanuj_PV_dir";
  const filePath = path.join(dataPath, file);
  if (!fs.existsSync(filePath)) {
    throw new Error("File not found.");
  }

  const fileStream = fs.createReadStream(filePath);
  let count = -1;
  try {
    const rl = readline.createInterface({
      input: fileStream,
    });

    for await (var line of rl) {
      if (count === -1) {
        validateFirstLine(line);
        count++;
      } else {
        count += validateAndReturnCount(line, product);
      }
    }
    return count;
  } catch (error) {
    console.log("HERE ERROPR", error.message);
  }
};

const validateFirstLine = (line) => {
  var splitted = line.split(",");
  if (splitted.length != 2) throw new Error("Input file not in CSV format.");
  if (
    cleaningData(splitted[0]) === "product" &&
    cleaningData(splitted[1]) === "amount"
  )
    return true;
  throw new Error("Input file not in CSV format.");
};

const validateAndReturnCount = (line, product) => {
  var splitted = line.split(",");
  if (splitted.length != 2) throw new HttpException("Error", HttpStatus.OK);
  if (cleaningData(splitted[0]) === product)
    return Number(cleaningData(splitted[1])) || 0;
  else return 0;
};

const cleaningData = (data) => {
  return data.trim().toLocaleLowerCase();
};

module.exports = { calculateSum };
