const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
// app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use("/api",apiRoutes);
//connect to mongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact"
);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// app.get("/article",(req,res)=>{
//   console.log(" ok ")
// })
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
