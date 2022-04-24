const mongoose = require("mongoose");

//atlas url
var mongoose_url =
  "mongodb+srv://itrix:itrix@cluster0.ngqge.mongodb.net/itrix?retryWrites=true&w=majority";

//connecting
mongoose.connect(mongoose_url);

var db = mongoose.connection;

//error instance
db.on("error", console.error.bind("error connecting to database"));

//success instance
db.once("open", () => {
  console.log("Successfully connected to atlas!!");
});
