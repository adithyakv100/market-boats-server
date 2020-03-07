const { app } = require("./loaders");

app.listen(80, () => {
  console.log("Server started on port 80!");
});

module.exports = app;
