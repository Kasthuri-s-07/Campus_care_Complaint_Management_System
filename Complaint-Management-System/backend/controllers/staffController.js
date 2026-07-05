const Complaint = require("../models/Complaint");

const getAssignedComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      assignedStaff: req.user.id,
    })
      .sort({
        createdAt: -1,
      })
      .populate("user", "userId name email")
      .populate("assignedStaff", "userId name email")
      .populate("assignedDepartment", "departmentId name");

    res.json(complaints);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateComplaintStatus = async (req, res) => {
  try {
    const allowedStatus = [
      "In Progress",
      "Resolved",
      "Closed",
    ];

    const { status } = req.body;

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        message: "Invalid Status",
      });
    }

    const complaint = await Complaint.findOne({
      _id: req.params.id,
      assignedStaff: req.user.id,
    });

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found",
      });
    }

    complaint.status = status;

    await complaint.save();

    res.json({
      message: "Status updated successfully",
      complaint,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAssignedComplaints,
  updateComplaintStatus,
};