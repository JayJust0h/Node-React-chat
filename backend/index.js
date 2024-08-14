const express = require('express');
const cors = require('cors');
const axios = require('axios');
const http = require('http');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "81a6d2df-808d-4fc0-86a4-ab58c224fdb1" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

const server = http.createServer(app);

server.on('clientError', (err, socket) => {
  console.error('Client error:', err);
  socket.destroy();
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});