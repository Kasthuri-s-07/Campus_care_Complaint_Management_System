const Complaint = require("../models/Complaint");

// Generate Complaint ID
const generateComplaintId = async () => {
  const year = new Date().getFullYear();

  const lastComplaint = await Complaint.findOne({
    complaintId: { $exists: true },
  }).sort({ createdAt: -1 });

  let nextNumber = 1;

  if (lastComplaint && lastComplaint.complaintId) {
    const parts = lastComplaint.complaintId.split("-");
    nextNumber = parseInt(parts[2]) + 1;
  }

  return `CMP-${year}-${String(nextNumber).padStart(6, "0")}`;
};

const createComplaint = async (req, res) => {
  try {

    const complaintId = await generateComplaintId();

const complaint = await Complaint.create({
    complaintId,

    user: req.user.id,

    title: req.body.title,

    description: req.body.description,

    category: req.body.category,

    location: req.body.location,

    priority: req.body.priority,

  
});

    res.status(201).json({
      message: "Complaint submitted successfully",
      complaint,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMyComplaints = async (req, res) => {
  try {

    const complaints = await Complaint.find({ user: req.user.id });

    res.status(200).json(complaints);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createComplaint,
  getMyComplaints,
};