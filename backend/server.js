const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const musicRoutes = require('./routes/music');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/music', musicRoutes);

app.get('/', (req, res) => {
  res.send('SteheStudio API is running 🎵');
});

// ✅ Only one listen call
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
