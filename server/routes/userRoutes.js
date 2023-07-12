import express from "express";
import User from "../schemas/userSchema.js";

const router = express.Router();

//GET /users/length
router.get("/users/length",async(req,res)=>{
  try {
    const userCount = await User.countDocuments();
    res.status(200).json({ length: userCount });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
})

// GET /users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /users
router.post("/users", async (req, res) => {
  try {
    const user = new User({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });

    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /users/:user_id
router.get("/users/:user_id", async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT /users/:user_id
router.put("/users", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.user_id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = req.body.name;
    user.email = req.body.email;
    user.phone = req.body.phone;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /users/:user_id
router.delete("/users/:user_id", async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
