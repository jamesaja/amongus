const app = require("./app");

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port http://localhost:" + listener.address().port);
});
