const express = require("express");
const router = express.Router();

// POST /api/music/generate
router.post("/generate", (req, res) => {
  const { lyrics, genre, mood, duration } = req.body;

  // Simulate generation logic
  if (!lyrics || lyrics.length > 3000) {
    return res.status(400).json({ error: "Lyrics are required and must be under 3000 characters." });
  }

  const generatedMusic = {
    id: Math.floor(Math.random() * 1000000),
    genre,
    mood,
    duration: duration || "4 minutes",
    message: "🎶 Music generated successfully!",
    lyrics: lyrics.slice(0, 3000),
  };

  res.json(generatedMusic);
});

module.exports = router;
