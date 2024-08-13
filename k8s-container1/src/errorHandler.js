const errorHandler = async (err, req, res) => {
  let statusCode;
  let errorMessage;

  console.log("Errorrrr C1", err.message);
  switch (err.message) {
    case "Invalid JSON input.":
      statusCode = 400;
      errorMessage = {
        file: null,
        error: err.message,
      };
      break;
    case "File not found.":
    case "Input file not in CSV format.":
      statusCode = 404;
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
