const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const songs = {};
const ADMIN_USERS = ["StellaNjo"];

function simulateMusicGeneration({ genre, mood, duration, lyrics }) {
  return {
    audioUrl: "https://example.com/fake-audio-preview.mp3",
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000
  };
}

app.post("/generate", (req, res) => {
  const { username, genre, mood, duration, lyrics } = req.body;

  if (!genre || !mood || !duration) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const songData = simulateMusicGeneration({ genre, mood, duration, lyrics });

  const id = Date.now().toString();
  songs[id] = {
    ...songData,
    username,
    createdAt: Date.now(),
    lyrics,
    genre,
    mood,
    duration,
  };

  return res.json({ id, ...songData });
});

app.get("/song/:id", (req, res) => {
  const song = songs[req.params.id];
  if (!song) return res.status(404).json({ error: "Song not found" });

  const now = Date.now();
  if (now > song.expiresAt && !ADMIN_USERS.includes(song.username)) {
    return res.status(403).json({ error: "Song expired" });
  }

  return res.json(song);
});

app.get("/", (req, res) => {
  res.send("SteheStudio AI Backend is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Express server placeholder
