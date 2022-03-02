const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

// Checking if Build folder from client side exists or not
let BuildExistence = fs.existsSync(
  path.join(__dirname, "..", "client", "build")
);
if (BuildExistence === false) {
  console.log("WARN: Build Folder Doesn't exists");
  console.log("WARN: run `npm run build` in client folder\n");
}

// Enabling Express to read req body as json
app.use(express.json());

// Root ('/') Path
const root = require("./routes/root");
app.use("/", root);

// user route 
app.use("/api/users/", require("./routes/userRoute") );

// Serving files from ../client/build
// Which can be created by running `npm run build` in client folder
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.listen(PORT, () => {
  console.log(`Started Listening in PORT ${PORT}...`);
});
