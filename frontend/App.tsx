import React, { useState } from "react";

const App = () => {
  const [genre, setGenre] = useState("");
  const [mood, setMood] = useState("");
  const [duration, setDuration] = useState(4); // default 4 minutes
  const [lyrics, setLyrics] = useState("");
  const maxWords = 3000;

  const handleLyricsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const wordCount = e.target.value.trim().split(/\s+/).length;
    if (wordCount <= maxWords) {
      setLyrics(e.target.value);
    } else {
      alert("Lyrics must be 3000 words or less.");
    }
  };

  const handleGenerateMusic = () => {
    // Placeholder for future API call
    console.log("Generating music with:", { genre, mood, duration, lyrics });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">SteheStudio AI Music Generator</h1>

      <label className="block">
        Genre:
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="mt-1 block w-full border p-2 rounded"
        />
      </label>

      <label className="block">
        Mood:
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="mt-1 block w-full border p-2 rounded"
        />
      </label>

      <label className="block">
        Duration (minutes):
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          min="1"
          className="mt-1 block w-full border p-2 rounded"
        />
      </label>

      <label className="block">
        Custom Lyrics (optional):
        <textarea
          value={lyrics}
          onChange={handleLyricsChange}
          rows={6}
          placeholder="Paste or write up to 3000 words of lyrics here..."
          className="mt-1 block w-full border p-2 rounded"
        />
      </label>

      <button
        onClick={handleGenerateMusic}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Generate Music
      </button>
    </div>
  );
};

export default App;
// React App placeholder
