const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

const rootDir = require("./util/path");
const addData = require("./routes/add");
const listRoutes = require("./routes/list");

const app = express();

app.set('view engine', 'ejs');
app.set("views", "views");

app.use((req, res, next)=>{
    res.set('Cache-Control', 'no-store'); 
    next(); 
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/add", addData.routes);
app.use(listRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: ""});
});

app.listen(80);
