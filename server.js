const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json({ extended: true }));
app.get("/", (req, res) => res.send("API running"));
app.use("/api/player", require("./routers/api/player"));
app.use("/api/cards", require("./routers/api/cardsRoute"));

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server started at ${port}`));
