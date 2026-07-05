const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    complaintId: {
      type: String,
      unique: true,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Maintenance", "Electrical", "IT", "Cleaning", "Library"],
    },

    location: {
      type: String,
      required: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Medium",
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Assigned",
        "In Progress",
        "Resolved",
        "Closed",
      ],
      default: "Pending",
    },

    image: {
      type: String,
      default: "",
    },

    assignedDepartment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      default: null,
    },

    assignedStaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Complaint", complaintSchema);