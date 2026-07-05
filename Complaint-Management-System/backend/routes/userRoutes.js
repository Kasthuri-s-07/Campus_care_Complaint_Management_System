const express = require("express");
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const { getProfile } = require("../controllers/userController");

const router = express.Router();

router.get("/profile", protect, getProfile);

router.get(
  "/admin",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      message: "Welcome Admin"
    });
  }
);

module.exports = router;