import { useState } from "react";
import API from "../../api/axios";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Button from "../../components/ui/Button";
function SubmitComplaint() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "IT",
    location: "",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitComplaint = async (e) => {
    e.preventDefault();

    try {
      await API.post("/complaints", form);
      alert("Complaint submitted successfully");
      setForm({
        title: "",
        description: "",
        category: "IT",
        location: "",
        priority: "Medium",
      });
    } catch {
      alert("Failed to submit complaint");
    }
  };

  return (
    <div className="layout">
      <Sidebar role="user" />
      <main>
        <Navbar title="Submit Complaint" />

        <form className="form-card" onSubmit={submitComplaint}>
          <input name="title" placeholder="Complaint title" value={form.title} onChange={handleChange} required />

          <textarea name="description" placeholder="Describe the issue" value={form.description} onChange={handleChange} required />

          <select name="category" value={form.category} onChange={handleChange}>
            <option>Maintenance</option>
            <option>Electrical</option>
            <option>IT</option>
            <option>Cleaning</option>
            <option>Library</option>
          </select>

          <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />

          <select name="priority" value={form.priority} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>

          <Button type="submit">Submit Complaint</Button>
        </form>
      </main>
    </div>
  );
}

export default SubmitComplaint;