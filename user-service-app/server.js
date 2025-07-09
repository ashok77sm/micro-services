const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
  res.send('User Service is running');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`User Service listening on port ${PORT}`));