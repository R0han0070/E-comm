const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());

//import routes

const product = require("./routes/productRoutes");

app.use("/api/v1", product);

// Middleware for errors
app.use(errorMiddleware);



//Below code is a different way for error handling

// app.all("*", (req, res, next) => {
//   const err = new Error(`Can't find the URL`);
//   err.status = "fail";
//   err.statusCode = 404;

//   next(err);
// });

// app.use((err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || "Internal Server Error";

//   res.status(err.statusCode).json({
//     success: false,
//     error: err,
//   });
// });

module.exports = app;
