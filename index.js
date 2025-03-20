
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
const baseApiUrl = async () => {
  const base = await axios.get('https://raw.githubusercontent.com/Mostakim0978/D1PT0/refs/heads/main/baseApiUrl.json');
  return base.data.api;
}; 

app.get('/', async (req, res) =>{
  res.sendFile(__dirname + '/index.html');
})
app.get('/alldl', async (req, res) => {
  try {
    const { url } = req.query;
    
    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' });
    }

  const response = await axios.get(`${await baseApiUrl()}/alldl?url=${url}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
      }
    });
    res.json({ data: response.data });
  } catch (error) {
    console.error('alldl Error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`API server running on port ${port}`);
});
