const express = require("express");
const app = express();

app.get("/api/books", (req, res) => {
  res.send(["Salom", "hello", "hi"]);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`${port}ni ewitdim`);
});
