const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const app = express();
const db = require("./models");
const trainersController = require("./controllers/trainersController");
const athleteController = require("./controllers/athleteController");
const treatmentController = require("./controllers/treatmentController");

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use('/static', express.static('public'))
app.use(express.static("public"));



app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main",
      handlebars: allowInsecurePrototypeAccess(handlebars),
    })
  );
app.set("view engine", "handlebars");


//VIEWS ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

app.use(trainersController);
app.use(athleteController);
app.use(treatmentController);


app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});



db.sequelize.sync().then(function() {
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
});
