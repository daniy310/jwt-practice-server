const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

//Routes

//register and login
app.use("/auth", require("./routes/jwtAuth"));

//dashboard
app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
