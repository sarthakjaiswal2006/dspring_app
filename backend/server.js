
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "D SPRING backend is running!",
  });
});

const PORT = 5001;


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


