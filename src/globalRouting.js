const { Router } = require("express");

const router = Router();

const userRouter = require("./apps/User/user.routes");

router.get("/", function(req, res) {
  res.send("Welcome to Market-Boats. It's running!");
});

router.use("/auth", userRouter);

module.exports = {
  router
};
