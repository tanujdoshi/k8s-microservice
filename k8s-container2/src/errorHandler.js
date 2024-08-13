const errorHandler = async (err, req, res) => {
  let statusCode = 200;
  let errorMessage;

  console.log("Errorrrr C2", err.message);
  switch (err.message) {
    case "Input file not in CSV format.":
      errorMessage = {
        file: req.file,
        error: err.message,
      };
      break;
    case "Input file not in CSV format.":
      errorMessage = {
        file: req.file,
        error: err.message,
      };
      break;
    case "File not found.":
      errorMessage = {
        file: req.file,
        error: err.message,
      };
      break;
    default:
      statusCode = 500;
      errorMessage = {
        error: "Something went wrong!",
      };
      break;
  }

  res.status(statusCode).json(errorMessage);
};

module.exports = { errorHandler };
