const express = require("express");
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  getAssignedComplaints,
  updateComplaintStatus,
} = require("../controllers/staffController");

const router = express.Router();

router.get("/complaints", protect, authorizeRoles("staff"), getAssignedComplaints);

router.put(
  "/complaints/:id/status",
  protect,
  authorizeRoles("staff"),
  updateComplaintStatus
);

module.exports = router;