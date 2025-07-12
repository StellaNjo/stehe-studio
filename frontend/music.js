document.getElementById("musicForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const lyrics = document.getElementById("lyrics").value;
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;
  const duration = document.getElementById("duration").value;

  const responseBox = document.getElementById("result");
  responseBox.innerHTML = "⏳ Generating your music...";

  try {
    const res = await fetch("https://stehe-studio-production.up.railway.app/api/music/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lyrics, genre, mood, duration }),
    });

    const data = await res.json();

    if (res.ok) {
      responseBox.innerHTML = `
        <h3>✅ Music Generated</h3>
        <p><strong>Genre:</strong> ${data.genre}</p>
        <p><strong>Duration:</strong> ${data.duration}</p>
        <p><strong>Lyrics Snippet:</strong></p>
        <pre>${data.lyrics}</pre>
      `;
    } else {
      responseBox.innerHTML = `<span style="color: red;">❌ ${data.error}</span>`;
    }
  } catch (err) {
    console.error(err);
    responseBox.innerHTML = `<span style="color: red;">⚠️ Server error. Please try again later.</span>`;
  }
});
