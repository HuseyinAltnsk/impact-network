const router = require("express").Router();
const path = require("path");

router.use("/rides", require("./rides"));
router.use("/user", require("./user"));
// router.use("/login", require("./login"));


// //If route doesn't exist, return index.html
router.use("*", (req, res) =>
  res.sendFile(path.resolve(__dirname + "/../../build/index.html"))
);

module.exports = router;
