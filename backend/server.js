const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const musicRoutes = require('./routes/music');

const app = express();

// ✅ Use the dynamic PORT from Railway
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/music', musicRoutes);

app.get('/', (req, res) => {
  res.send('SteheStudio API is running 🎵');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

