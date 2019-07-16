require("module-alias/register");
const config = require("config");

const app = require("./app");

const port = config.port || 3000;

app.listen(port, () => console.log(`Server running at ${port}`));
