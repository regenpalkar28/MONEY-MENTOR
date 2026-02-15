import express from 'express';
import User from '../models/User.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Multer storage for images
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, req.params.username + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// GET PROFILE
router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// UPDATE PROFILE
router.put("/:username", async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { username: req.params.username },
      req.body,
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ msg: "Update failed" });
  }
});

// UPLOAD PROFILE PICTURE
router.post("/:username/upload-photo", upload.single("photo"), async (req, res) => {
  try {
    const imagePath = `/uploads/${req.file.filename}`;

    await User.findOneAndUpdate(
      { username: req.params.username },
      { profilePicture: imagePath }
    );

    res.json({ msg: "Image uploaded", imagePath });
  } catch (err) {
    res.status(500).json({ msg: "Upload failed" });
  }
});

export default router;
