const express = require("express");
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  getAdminDashboard,
  getAllComplaints,
  assignComplaint,
  getAllStaff,
  getAllUsers,
} = require("../controllers/adminController");

const router = express.Router();

router.get("/dashboard", protect, authorizeRoles("admin"), getAdminDashboard);
router.get("/complaints", protect, authorizeRoles("admin"), getAllComplaints);
router.put(
  "/complaints/:id/assign",
  protect,
  authorizeRoles("admin"),
  assignComplaint
);
router.get("/staff", protect, authorizeRoles("admin"), getAllStaff);
router.get(
  "/users",
  protect,
  authorizeRoles("admin"),
  getAllUsers
);
module.exports = router;