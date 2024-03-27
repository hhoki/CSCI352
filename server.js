require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object

// TODO: Redirect requests to endpoint starting with appropiate **
//app.use("/careplan", TODO: appropraite routes **require("./routes/postRoutes"));
//app.use("/patient", **require("./routes/postRoutes"));
//app.use("/practitioner", **require("./routes/postRoutes"));
//app.use("/activity", **require("./routes/postRoutes"));


// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
