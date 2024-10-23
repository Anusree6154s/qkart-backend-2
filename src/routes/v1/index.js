const express = require("express");
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const productRoute = require("./product.route");

const cartRoute = require("./cart.route");
const swaggerRoute = require("./swagger.route");
const router = express.Router();

router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/auth", authRoute);
router.use("/cart", cartRoute);
router.use("/swagger", swaggerRoute);

module.exports = router;
