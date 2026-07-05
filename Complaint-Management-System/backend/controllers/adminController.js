const Complaint = require("../models/Complaint");
const User = require("../models/User");
const Department = require("../models/Department");

const getAdminDashboard = async (req, res) => {
  try {
    const totalComplaints = await Complaint.countDocuments();
    const pending = await Complaint.countDocuments({ status: "Pending" });
    const assigned = await Complaint.countDocuments({ status: "Assigned" });
    const inProgress = await Complaint.countDocuments({ status: "In Progress" });
    const resolved = await Complaint.countDocuments({ status: "Resolved" });
    const closed = await Complaint.countDocuments({ status: "Closed" });

    res.json({
      totalComplaints,
      pending,
      assigned,
      inProgress,
      resolved,
      closed,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("user", "name email")
      .populate("assignedStaff", "userId name email role")
      .populate("assignedDepartment", "name")
    
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllStaff = async (req, res) => {
  try {

    const staff = await User.find(
      { role: "staff" },
      "userId name email role"
    );

    res.status(200).json(staff);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
const getAllUsers = async (req, res) => {
  try {

    const users = await User.find()
      .select("userId name email role createdAt")
      .sort({ createdAt: -1 });

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
const assignComplaint = async (req, res) => {
  try {
    const { assignedDepartment, assignedStaff } = req.body;

    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }
    if (complaint.assignedStaff) {

    return res.status(400).json({

        message:"Complaint already assigned."

    });

}
    complaint.assignedDepartment = assignedDepartment;
    complaint.assignedStaff = assignedStaff;
    complaint.status = "Assigned";
    const staff = await User.findById(assignedStaff);


    await complaint.save();

    res.json({
      message: "Complaint assigned successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getAdminDashboard,
  getAllComplaints,
  assignComplaint,
  getAllStaff,
  getAllUsers,
};