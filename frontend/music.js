document.getElementById('music-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const genre = document.getElementById('genre').value;
  const mood = document.getElementById('mood').value;
  const duration = document.getElementById('duration').value;
  const lyrics = document.getElementById('lyrics').value;
  const singer = document.getElementById('singer').value;

  try {
    const response = await fetch('https://stehe-studio-production.up.railway.app/api/music/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ genre, mood, duration, lyrics, singer })
    });

    const data = await response.json();

    if (response.ok && data.audioUrl) {
      const audioPlayer = document.getElementById('audio-player');
      audioPlayer.src = data.audioUrl;
      audioPlayer.style.display = 'block';
    } else {
      alert('Failed to generate music: ' + (data.message || 'Unknown error'));
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while generating music.');
  }
});
