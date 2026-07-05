const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateUserId = async (role) => {

  const prefixMap = {
    admin: "ADM",
    staff: "STF",
    user: "USR",
  };

  const prefix = prefixMap[role];

  const year = new Date().getFullYear();

  const lastUser = await User.findOne({
    role,
    userId: { $exists: true },
  }).sort({ createdAt: -1 });

  let nextNumber = 1;

  if (lastUser && lastUser.userId) {

    const parts = lastUser.userId.split("-");

    nextNumber = parseInt(parts[2]) + 1;

  }

  return `${prefix}-${year}-${String(nextNumber).padStart(4, "0")}`;

};
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const generatedUserId = await generateUserId(role);

const user = await User.create({
  userId: generatedUserId,
  name,
  email,
  password: hashedPassword,
  role,
});

    res.status(201).json({
      message: "User registered successfully",
      user: {
    id: user._id,
    userId: user.userId,
    name: user.name,
    email: user.email,
    role: user.role
}
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
    id: user._id,
    userId: user.userId,
    name: user.name,
    email: user.email,
    role: user.role
}
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { registerUser, loginUser };