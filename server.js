const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 3000;

app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

const routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
